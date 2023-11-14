function Tag(label, key) {
  return (
    <h3 key={key} className="whitespace-nowrap rounded-full border-2 border-white bg-[#141414] px-3 py-1 text-center">
      {label}
    </h3>
  )
}

export default Tag
