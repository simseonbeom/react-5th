import { useId, useRef } from "react";
import type { Chat } from ".."
import S from '../style.module.css'

type Props = {
  message:Chat;
  onAddMessage:(message:string)=>void;
}
function ChatBox({message,onAddMessage}: Props) {
  const id = useId();

  return (
    <section className={S.chatBox}>
      <h2 className="a11y-hidden">채팅 화면</h2>
      <ol className={S.chats}>
        {
          message.map(({id, isMe, message})=> {
            const classNames = `${S.chat} ${isMe? S.me : ''}`.trim();
            return (
              <li key={id} className={classNames}>
                {message}
              </li>
            )
          })
        }
      </ol>
      <form className={S.form}>
        <div className={S.messageBox}>
          <label htmlFor={id} className="a11y-hidden">메시지 입력</label>
          <textarea 
            name="message" 
            id={id}
          ></textarea>
        </div>
        <button type="submit">보내기</button>
      </form>
    </section>
  )
}
export default ChatBox