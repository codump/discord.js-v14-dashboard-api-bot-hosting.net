const { SlashCommandBuilder, MessageFlags, AttachmentBuilder } = require('discord.js')
const { botServerId, botServerApiKey, masterUid } = require('../config.json') 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('botserver')
		.setDescription('Manage your bot server.')
    .addStringOption((option) =>
		option
			.setName('action')
			.setDescription('Select action to perform.')
			.setRequired(true)
			.addChoices(
				{ name: 'Info', value: 'info' },
				{ name: 'Start', value: 'start' },
				{ name: 'Restart', value: 'restart' },
				{ name: 'Stop', value: 'stop' },
			),
	  )
		.setDefaultMemberPermissions(0),
	async execute(interaction) {
  if (interaction.member.user.id === masterUid){
    const action = interaction.options.getString('action')

    // info
    if (action == 'info') {
      fetch(`https://control.bot-hosting.net/api/client/servers/${botServerId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${botServerApiKey}`,
        },
      }).then((response) => {
        return response.json()
      }).then((json) => {
        const output = JSON.stringify(json, null, 2)
        if (output.length > 1900) {
          const attachment = new AttachmentBuilder(Buffer.from(output), { name: 'response.json' })
          return interaction.reply({ files: [attachment], flags: MessageFlags.Ephemeral })
        }
        return interaction.reply({ content: `\`\`\`json\n${output}\n\`\`\``,  flags: MessageFlags.Ephemeral })
      });
    }
    //info
    // start / restart / stop
    if (action == 'start' || action == 'restart' || action == 'stop') {
      fetch(`https://control.bot-hosting.net/api/client/servers/${botServerId}/power`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${botServerApiKey}`,
        },
        body: JSON.stringify({signal: action})
      }).then((response) => {
        if(response.status !== 204){
          return interaction.reply({ content: `Error: ${response.status}`,  flags: MessageFlags.Ephemeral })
        } else {
          return interaction.reply({ content: `Action: ${action} complete.`,  flags: MessageFlags.Ephemeral })
        }
      });
    }
    // start / restart / stop
  }  else {
		await interaction.reply({ content: "Only the master can use this command." });
  }

	},
}