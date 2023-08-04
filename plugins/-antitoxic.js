const toxicRegex = /долбоеб|еблан|уебище|пидорас|гондон|уебок/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, сказать слово (${isToxic}) это запрещено в этом боте *${user.warn}/5* предупреждений`, false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`Hola *@${m.sender.split`@`[0]}*, вы превысили 5 предупреждений, вы будете заблокированы и удалены из этой группы`, false, {mentions: [m.sender]});
    user.banned = true;
    await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
