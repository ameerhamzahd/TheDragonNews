import { FaRegEye, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ eachNews }) => {
    const {
        id,
        title,
        details,
        thumbnail_url,
        author,
        rating,
        total_view,
        tags,
    } = eachNews;

    return (
        <div className="card bg-base-100 shadow-md rounded-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-base-200 rounded-t-xl">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author.name}</h2>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toISOString().split("T")[0]}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <FiShare2 className="text-gray-500 cursor-pointer hover:scale-110" />
                    <FaRegBookmark className="text-gray-500 cursor-pointer hover:scale-110" />
                </div>
            </div>

            {/* Title */}
            <div className="p-4">
                <h1 className="text-lg font-bold leading-snug">{title}</h1>
            </div>

            {/* Image */}
            <figure className="px-4">
                <img src={thumbnail_url} alt={title} className="rounded-md" />
            </figure>

            {/* Description */}
            <div className="px-4 py-3 text-sm text-gray-600">
                <p className="mb-2 font-medium">
                    {new Date(author.published_date).toDateString()} | Tag Cloud Tags:{" "}
                    {tags.join(", ")} – {details.slice(0, 200)}...
                    <Link to={`/news-details/${id}`} className="ml-1 text-secondary font-medium cursor-pointer hover:underline">
                        Read More
                    </Link>
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 pb-4">
                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                            key={index}
                            className={index < rating.number ? "text-orange-400" : "text-gray-300"}
                        />
                    ))}
                    <span className="ml-1 text-sm text-black font-medium">{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1 text-gray-500">
                    <FaRegEye />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
