import { useRouter } from 'next/router';

import PostPreview from './post-preview';

export default function CategoryBlogs({ posts, all_categories }: any) {
  // console.log(all_categories, 'all_categories');

  const router = useRouter();

  const handleCreateLink = (title: string) => {
    router.replace(`categories/${title}`);
  };

  return (
    <section>
      <h2 className='mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl'>
        More Blogs
      </h2>
      <div className='blog-content  flex flex-col-reverse justify-between lg:flex-row lg:gap-10'>
        <div className='mb-32 flex flex-col gap-6 lg:w-2/3'>
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.mainImage}
              date={post.publishedAt}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              categories={post.categories}
            />
          ))}
        </div>
        <div className=' flex lg:w-1/3'>
          <div className='sticky top-32 mb-10 h-fit rounded-xl bg-gray-50 p-4 text-left shadow'>
            <p className='pb-4'>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
            <div className='box flex flex-wrap gap-3'>
              {all_categories.map((categ) => {
                return (
                  <div
                    className='box flex w-fit cursor-pointer gap-3 border border-gray-300 p-2 text-gray-500 hover:border-black hover:text-black'
                    key={categ._id}
                    onClick={() => {
                      handleCreateLink(categ.title);
                    }}
                  >
                    <p>{categ.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
