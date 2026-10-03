import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { getPublishedPosts } from "@/lib/posts";

type Cover = {
  url?: string | null;
  alt?: string | null;
};

type PostCard = {
  id: number | string;
  slug: string;
  title: string;
  excerpt?: string | null;
  cover?: Cover | number | null;
};

export async function BlogIndex() {
  let posts: PostCard[] = [];

  try {
    posts = (await getPublishedPosts()) as PostCard[];
  } catch {
    posts = [];
  }

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
          <span className="blog-eyebrow">Blog</span>
          <h1>What we&apos;re building and learning</h1>
          <p className="blog-lead">
            Notes from product partnerships: how we decide, what we ship, and
            what we leave out.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
        {posts.length === 0 ? (
          <p className="blog-empty">
            No posts yet. Publish one from the admin and it will show up here.
          </p>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => {
              const cover =
                post.cover && typeof post.cover === "object" ? post.cover : null;

              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="blog-card"
                >
                  {cover?.url ? (
                    <div className="blog-card-media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cover.url} alt={cover.alt || ""} />
                    </div>
                  ) : null}
                  <div className="blog-card-body">
                    <h2>{post.title}</h2>
                    {post.excerpt ? <p>{post.excerpt}</p> : null}
                    <span className="blog-card-more">
                      Read article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
