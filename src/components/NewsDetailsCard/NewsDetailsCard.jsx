import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetailsCard = ({ targetedNewsData }) => {

    const {
        title,
        details,
        thumbnail_url,
        tags,
        category_id,
        author
    } = targetedNewsData;

    return (
        <div className='card bg-base-100 shadow-md rounded-xl'>
            {/* Image */}
            <figure>
                <img src={thumbnail_url} alt={title} className="w-full max-h-80 object-cover" />
            </figure>

            {/* Content */}
            <div className="card-body">
                {/* Title */}
                <h2 className="card-title text-xl font-bold leading-snug">{title}</h2>

                {/* Tags & Date */}
                <p className="text-gray-500 text-sm mt-1 font-semibold">
                    {new Date(author.published_date).toDateString()} | Tag Cloud Tags: {tags.join(", ")}
                </p>

                {/* Details */}
                <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                    {details}
                </p>

                {/* Category Link */}
                <div className="mt-4">
                    <Link
                        to={`/category/${category_id}`}
                        className="btn btn-secondary btn-sm text-white gap-2"
                    >
                        <FaArrowLeftLong />
                        All news in this category
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;