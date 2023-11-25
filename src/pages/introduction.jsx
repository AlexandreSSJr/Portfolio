const aboutMe1 =
  "Hey there! I'm a Software Developer specialized in UI/UX with over 10 years of experience and a graduate in Computer Science by UFRGS, one of the highest ranking universities in Latin America."
const aboutMe2 =
  "I've worked for 5 years in HP, participating in and later leading several innovation projects, creating AI and remote access related solutions while filing multiple invention disclosures. With the drive to do more and get closer to the core of the issues I solve, I've moved to a more independent and fulfilling career."
const aboutMe3 =
  "I also enjoy creating art of all sorts and venturing into game development in - basically all of - my spare time. So there is a bit of everything I do and love here, where I share some of my life's work."
const aboutMe4 =
  'Feel free to contact me (links below) if you have any comment, feedback, or if you believe I can help you achieve anything you have in mind!'

function Introduction() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-start md:px-16">
        <h2>{aboutMe1}</h2>
        <h2>{aboutMe2}</h2>
        <h2>{aboutMe3}</h2>
        <h2>{aboutMe4}</h2>
      </div>
    </>
  )
}

export default Introduction
