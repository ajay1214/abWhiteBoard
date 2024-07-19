"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new-board-button";
import Image from "next/image";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface BoardlistProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardlistProps) => {
  const data = useQuery(api.boards.get, { orgId, ...query }); // TODO: Change to API call

  if (data === undefined) {
    return (
      <div className="h-full">
        {/* <h2 className="text-3xl">
          {query.favorites ? "Favorite boards" : "Team boards"}
        </h2> */}
        <div className="flex justify-center items-center h-full">
          <Image
            src="/abWBsvg.svg"
            alt="logo"
            width={480}
            height={240}
            className="animate-pulse duration-700"
          />
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10"> */}
        {/* <NewBoardButton orgId={orgId} disabled /> */}
        {/* <BoardCard.Skeleton /> */}
        {/* </div> */}
      </div>
    );
  }

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorite boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        {!query.favorites && <NewBoardButton orgId={orgId} />}
        {data?.map((board) => (
          <BoardCard key={board._id} {...board} />
        ))}
      </div>
    </div>
  );
};
