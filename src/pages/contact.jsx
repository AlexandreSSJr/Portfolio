function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="m-8">{'Contact and other Links'}</h1>
        <a
          // className="w-60 rounded-lg border-2 border-[#ffffff] p-2 text-[#ffffff] transition-all hover:border-[#ffffffbb] hover:text-[#ffffffbb]"
          className="w-60 rounded-lg border-2 border-[#1caad9] p-2 text-[#1caad9] transition-all hover:border-[#1caad9bb] hover:text-[#1caad9bb]"
          href="mailto:alexsantosstudios@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {'Email'}
        </a>
        <a
          // className="w-60 rounded-lg border-2 border-[#0e76a8] p-2 text-[#0e76a8] transition-all hover:border-[#0e76a8bb] hover:text-[#0e76a8bb]"
          className="w-60 rounded-lg border-2 border-[#1caad9] p-2 text-[#1caad9] transition-all hover:border-[#1caad9bb] hover:text-[#1caad9bb]"
          href="https://www.linkedin.com/in/alexandressj"
          target="_blank"
          rel="noreferrer"
        >
          {'LinkedIn'}
        </a>
        <a
          // className="w-60 rounded-lg border-2 border-[#f5f5f5] p-2 text-[#f5f5f5] transition-all hover:border-[#f5f5f5bb] hover:text-[#f5f5f5bb]"
          className="w-60 rounded-lg border-2 border-[#1caad9] p-2 text-[#1caad9] transition-all hover:border-[#1caad9bb] hover:text-[#1caad9bb]"
          href="https://github.com/AlexandreSSJr"
          target="_blank"
          rel="noreferrer"
        >
          {'GitHub'}
        </a>
        <a
          // className="w-60 rounded-lg border-2 border-[#fa5c5c] p-2 text-[#fa5c5c] transition-all hover:border-[#fa5c5cbb] hover:text-[#fa5c5cbb]"
          className="w-60 rounded-lg border-2 border-[#1caad9] p-2 text-[#1caad9] transition-all hover:border-[#1caad9bb] hover:text-[#1caad9bb]"
          href="https://alex-santos.itch.io/"
          target="_blank"
          rel="noreferrer"
        >
          {'Itch.io (Game Dev)'}
        </a>
        <a
          className="w-60 rounded-lg border-2 border-[#1caad9] p-2 text-[#1caad9] transition-all hover:border-[#1caad9bb] hover:text-[#1caad9bb]"
          href="https://sketchfab.com/AlexandreSSJ"
          target="_blank"
          rel="noreferrer"
        >
          {'Sketchfab (3D Art)'}
        </a>
        {/* <a
          className="w-60 transition-all rounded-lg border-2 border-[#05CC46] p-2 text-[#05CC46] hover:border-[#05CC46bb] hover:text-[#05CC46bb]"
          href="https://www.deviantart.com/alexandressj"
          target="_blank"
          rel="noreferrer"
        >
          {'DeviantArt (2D Art)'}
        </a> */}
      </div>
    </>
  )
}

export default Contact
