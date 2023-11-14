import Tag from '@/components/tag'

const text = (title, description, tags) => {
  return (
    <div className="justify-top w-sm flex max-w-sm flex-col gap-2">
      <h1 className="m-2 p-0">{title}</h1>
      <h2 className="m-2 p-0">{description}</h2>
      <div className="m-2 flex gap-2">{tags.map((tag, index) => Tag(tag, index))}</div>
    </div>
  )
}

const image = (images, link, index) => {
  return (
    <a
      key={index}
      className="cursor-pointer rounded-[14px] border-2 border-transparent p-2 transition-all hover:m-2 hover:border-[#f4f4f4] hover:p-0"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {/* {images.map((image, index) => (
        <img key={index} className="rounded-2xl" src={image} />
      ))} */}
      <img className="rounded-xl" src={images[0]} />
    </a>
  )
}

function ProjectCard(project, index) {
  return (
    <>
      <div className="m-8 flex flex-1 flex-col gap-8 text-start md:flex-row">
        {index % 2 == 0 ? (
          <>
            {text(project.title, project.description, project.tags)}
            {image(project.images, project.link, index)}
          </>
        ) : (
          <>
            {image(project.images, project.link, index)}
            {text(project.title, project.description, project.tags)}
          </>
        )}
      </div>
    </>
  )
}

export default ProjectCard
