import { unstable_noStore as noStore } from "next/cache";

import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";
import CarouselGallery from "./_components/carousel-gallery";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex h-screen justify-center items-center bg-neutral-900">
      <div className="flex flex-col items-center">
        <div>
          <CarouselGallery />
        </div>
        {/* <div>
          <p>
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div>

        <CrudShowcase /> */}
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="text-center">
      {latestPost ? (
        <p>Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
