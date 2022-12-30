export default function Category({category: {id, title, image}}) {
  return (
    <a href='#' className='flex flex-col group items-center p-4 gap-y-2 text-center hover:bg-purple-50 transition'>
        <img src={image} alt={title}  className="w-12 h-12 rounded border border-gray-200"/>
        <span className='text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight whitespace-nowrap'>{title}</span>
    </a>
  )
}
