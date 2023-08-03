import { Head } from "$fresh/runtime.ts";
import { RouteContext } from "$fresh/server.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Paper Church</title>
      </Head>
      <div class="px-4 py-8 mx-auto  border-b-1">
        <div class="container mx-auto">
          <h1 class="text-xl">Paper Church</h1>
        </div>
      </div>
      <div class="container mx-auto h-96 flex items-center">
        <span class="text-2xl font-bold">
          Welcome to Paper Church: Where Faith Meets Community
        </span>
      </div>
    </>
  );
}
