import React from "react";

const Articles = () => {
  const dummyArticles = [
    {
      title: "How to know if your screen is original",
      snippet: "Learn the signs of original vs fake mobile screens...",
    },
    {
      title: "When to replace your battery",
      snippet: "A quick guide on battery health and charging cycles...",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Latest Articles</h2>
      <div className="grid gap-4">
        {dummyArticles.map((article, i) => (
          <div key={i} className="p-3 bg-gray-50 border rounded">
            <h3 className="text-lg font-bold">{article.title}</h3>
            <p className="text-sm">{article.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
