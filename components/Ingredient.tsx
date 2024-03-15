import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type IngredientProps = {
  id: string;
  name: string;
  description: string;
  parent: []
  // title: string;
  // author: {
  //   name: string;
  //   email: string;
  // } | null;
  // content: string;
  // published: boolean;
};

const Ingredient: React.FC<{ ingredient: IngredientProps }> = ({ ingredient }) => {
  const name = ingredient.name? ingredient.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${ingredient.id}`)}>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Ingredient;
