import React, { use } from 'react';
import { NavLink } from 'react-router';
import Category from '../Category/Category';

const categoryPromise = fetch("/categories.json").then((response) => response.json());

const Categories = () => {

    const categories = use(categoryPromise);

    return (
        <div>
            <div>
                <h1 className='font-bold'>All Categories</h1>
            </div>

            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map((category) => <NavLink className="btn bg-base-100 border-0 hover:bg-base-200 hover:text-black font-semibold text-accent" to={`/category/${category.id}`} key={category.id} >{category.name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default Categories;