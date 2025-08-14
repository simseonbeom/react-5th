function ProfileCard() {
  return (
    <div className="flex flex-row gap-2 p-8 bg-[#fff9c6] rounded-xl m-5">
      <img className="size-30" src="/visual.png" alt="편한 범쌤" />
      <div>
        <div>
          <p>심선범</p>
          <p>Product Engineer</p>
        </div>
        <button>Message</button>
      </div>
    </div>
  )
}
export default ProfileCard