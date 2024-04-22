const products = [
  {
    id: "12f6392f-980e-4936-990c-5d180205cd0a",
    image: "/images/imagesTestProducts/imgTest1.webp",
    name: "Stool",
    category: ["furniture", "chair"],
    price: 49.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed posuere augue. Morbi et dolor nunc. Nulla auctor nunc at mauris facilisis accumsan. Donec egestas lacinia ligula, placerat aliquet augue dapibus non. Vivamus convallis ex vitae lobortis fringilla. Fusce nec erat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec cursus egestas volutpat. Nunc lorem ante, sollicitudin a dignissim eu, malesuada a dui. Donec hendrerit at elit sed mollis. Curabitur eget ipsum ultricies, feugiat eros eu, mattis ex. Donec nec mi eros. Sed ut odio orci. Nam justo orci, vulputate at vestibulum et, pulvinar nec mi. Nunc vulputate turpis justo, et condimentum nulla pellentesque vitae. Fusce nulla risus, fringilla ut sagittis eu, malesuada auctor sem. Vestibulum leo nisi, feugiat eu mi at, interdum euismod nisi. Donec felis nulla, tempor ac auctor vel, ultricies vel nulla. Etiam tincidunt fringilla nunc. Praesent id pharetra enim. Nunc laoreet dapibus bibendum. Maecenas sit amet luctus mi. Sed nulla eros, suscipit vitae pretium nec, sollicitudin et mi.",
    new: true,
    userLike: true,
    likes: 233,
  },
  {
    id: "1ae02b44-5b29-4b78-bc17-4f8d3326e13a",
    image: "/images/imagesTestProducts/imgTest2.webp",
    name: "Desk",
    category: ["furniture", "table"],
    price: 129.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed posuere augue. Morbi et dolor nunc. Nulla auctor nunc at mauris facilisis accumsan. Donec egestas lacinia ligula, placerat aliquet augue dapibus non. Vivamus convallis ex vitae lobortis fringilla. Fusce nec erat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec cursus egestas volutpat. Nunc lorem ante, sollicitudin a dignissim eu, malesuada a dui. Donec hendrerit at elit sed mollis. Curabitur eget ipsum ultricies, feugiat eros eu, mattis ex. Donec nec mi eros. Sed ut odio orci. Nam justo orci, vulputate at vestibulum et, pulvinar nec mi. Nunc vulputate turpis justo, et condimentum nulla pellentesque vitae. Fusce nulla risus, fringilla ut sagittis eu, malesuada auctor sem. Vestibulum leo nisi, feugiat eu mi at, interdum euismod nisi. Donec felis nulla, tempor ac auctor vel, ultricies vel nulla. Etiam tincidunt fringilla nunc. Praesent id pharetra enim. Nunc laoreet dapibus bibendum. Maecenas sit amet luctus mi. Sed nulla eros, suscipit vitae pretium nec, sollicitudin et mi.",
    new: false,
    userLike: true,
    likes: 120,
  },
  {
    id: "9c17c2f3-4cb8-409e-865b-7e8a132c7201",
    image: "/images/imagesTestProducts/imgTest3.webp",
    name: "Bookshelf",
    category: ["furniture", "storage"],
    price: 79.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed posuere augue. Morbi et dolor nunc. Nulla auctor nunc at mauris facilisis accumsan. Donec egestas lacinia ligula, placerat aliquet augue dapibus non. Vivamus convallis ex vitae lobortis fringilla. Fusce nec erat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec cursus egestas volutpat. Nunc lorem ante, sollicitudin a dignissim eu, malesuada a dui. Donec hendrerit at elit sed mollis. Curabitur eget ipsum ultricies, feugiat eros eu, mattis ex. Donec nec mi eros. Sed ut odio orci. Nam justo orci, vulputate at vestibulum et, pulvinar nec mi. Nunc vulputate turpis justo, et condimentum nulla pellentesque vitae. Fusce nulla risus, fringilla ut sagittis eu, malesuada auctor sem. Vestibulum leo nisi, feugiat eu mi at, interdum euismod nisi. Donec felis nulla, tempor ac auctor vel, ultricies vel nulla. Etiam tincidunt fringilla nunc. Praesent id pharetra enim. Nunc laoreet dapibus bibendum. Maecenas sit amet luctus mi. Sed nulla eros, suscipit vitae pretium nec, sollicitudin et mi.",
    new: true,
    userLike: false,
    likes: 80,
  },
  {
    id: "2dafe927-d4f2-448a-b3d2-cf6198fe046f",
    image: "/images/imagesTestProducts/imgTest4.webp",
    name: "Armchair",
    category: ["furniture", "chair"],
    price: 199.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed posuere augue. Morbi et dolor nunc. Nulla auctor nunc at mauris facilisis accumsan. Donec egestas lacinia ligula, placerat aliquet augue dapibus non. Vivamus convallis ex vitae lobortis fringilla. Fusce nec erat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec cursus egestas volutpat. Nunc lorem ante, sollicitudin a dignissim eu, malesuada a dui. Donec hendrerit at elit sed mollis. Curabitur eget ipsum ultricies, feugiat eros eu, mattis ex. Donec nec mi eros. Sed ut odio orci. Nam justo orci, vulputate at vestibulum et, pulvinar nec mi. Nunc vulputate turpis justo, et condimentum nulla pellentesque vitae. Fusce nulla risus, fringilla ut sagittis eu, malesuada auctor sem. Vestibulum leo nisi, feugiat eu mi at, interdum euismod nisi. Donec felis nulla, tempor ac auctor vel, ultricies vel nulla. Etiam tincidunt fringilla nunc. Praesent id pharetra enim. Nunc laoreet dapibus bibendum. Maecenas sit amet luctus mi. Sed nulla eros, suscipit vitae pretium nec, sollicitudin et mi.",

    new: false,
    userLike: true,
    likes: 400,
  },
  {
    id: "dd8bb3a2-0454-429d-89b7-979f78a05939",
    image: "/images/imagesTestProducts/imgTest5.webp",
    name: "Coffee Table",
    category: ["furniture", "table"],
    price: 89.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed posuere augue. Morbi et dolor nunc. Nulla auctor nunc at mauris facilisis accumsan. Donec egestas lacinia ligula, placerat aliquet augue dapibus non. Vivamus convallis ex vitae lobortis fringilla. Fusce nec erat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec cursus egestas volutpat. Nunc lorem ante, sollicitudin a dignissim eu, malesuada a dui. Donec hendrerit at elit sed mollis. Curabitur eget ipsum ultricies, feugiat eros eu, mattis ex. Donec nec mi eros. Sed ut odio orci. Nam justo orci, vulputate at vestibulum et, pulvinar nec mi. Nunc vulputate turpis justo, et condimentum nulla pellentesque vitae. Fusce nulla risus, fringilla ut sagittis eu, malesuada auctor sem. Vestibulum leo nisi, feugiat eu mi at, interdum euismod nisi. Donec felis nulla, tempor ac auctor vel, ultricies vel nulla. Etiam tincidunt fringilla nunc. Praesent id pharetra enim. Nunc laoreet dapibus bibendum. Maecenas sit amet luctus mi. Sed nulla eros, suscipit vitae pretium nec, sollicitudin et mi.",

    new: true,
    userLike: false,
    likes: 150,
  },
  {
    id: "e5db2c28-9fa3-4e77-9c65-b6bf85c7600f",
    image: "/images/imagesTestProducts/imgTest6.webp",
    name: "Wardrobe",
    category: ["furniture", "storage"],
    price: 299.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed posuere augue. Morbi et dolor nunc. Nulla auctor nunc at mauris facilisis accumsan. Donec egestas lacinia ligula, placerat aliquet augue dapibus non. Vivamus convallis ex vitae lobortis fringilla. Fusce nec erat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec cursus egestas volutpat. Nunc lorem ante, sollicitudin a dignissim eu, malesuada a dui. Donec hendrerit at elit sed mollis. Curabitur eget ipsum ultricies, feugiat eros eu, mattis ex. Donec nec mi eros. Sed ut odio orci. Nam justo orci, vulputate at vestibulum et, pulvinar nec mi. Nunc vulputate turpis justo, et condimentum nulla pellentesque vitae. Fusce nulla risus, fringilla ut sagittis eu, malesuada auctor sem. Vestibulum leo nisi, feugiat eu mi at, interdum euismod nisi. Donec felis nulla, tempor ac auctor vel, ultricies vel nulla. Etiam tincidunt fringilla nunc. Praesent id pharetra enim. Nunc laoreet dapibus bibendum. Maecenas sit amet luctus mi. Sed nulla eros, suscipit vitae pretium nec, sollicitudin et mi.",

    new: true,
    userLike: true,
    likes: 210,
  },
  {
    id: "7e0fbc76-890c-4a0b-86eb-1eab0ec1d299",
    image: "/images/imagesTestProducts/imgTest7.webp",
    name: "Dining Table",
    category: ["furniture", "table"],
    price: 249.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed posuere augue. Morbi et dolor nunc. Nulla auctor nunc at mauris facilisis accumsan. Donec egestas lacinia ligula, placerat aliquet augue dapibus non. Vivamus convallis ex vitae lobortis fringilla. Fusce nec erat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec cursus egestas volutpat. Nunc lorem ante, sollicitudin a dignissim eu, malesuada a dui. Donec hendrerit at elit sed mollis. Curabitur eget ipsum ultricies, feugiat eros eu, mattis ex. Donec nec mi eros. Sed ut odio orci. Nam justo orci, vulputate at vestibulum et, pulvinar nec mi. Nunc vulputate turpis justo, et condimentum nulla pellentesque vitae. Fusce nulla risus, fringilla ut sagittis eu, malesuada auctor sem. Vestibulum leo nisi, feugiat eu mi at, interdum euismod nisi. Donec felis nulla, tempor ac auctor vel, ultricies vel nulla. Etiam tincidunt fringilla nunc. Praesent id pharetra enim. Nunc laoreet dapibus bibendum. Maecenas sit amet luctus mi. Sed nulla eros, suscipit vitae pretium nec, sollicitudin et mi.",

    new: false,
    userLike: true,
    likes: 180,
  },
  {
    id: "872a1cbf-d5c4-490a-b4b7-ec7ab652f27c",
    image: "/images/imagesTestProducts/imgTest8.webp",
    name: "Shelves",
    category: ["furniture", "storage"],
    price: 69.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed posuere augue. Morbi et dolor nunc. Nulla auctor nunc at mauris facilisis accumsan. Donec egestas lacinia ligula, placerat aliquet augue dapibus non. Vivamus convallis ex vitae lobortis fringilla. Fusce nec erat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec cursus egestas volutpat. Nunc lorem ante, sollicitudin a dignissim eu, malesuada a dui. Donec hendrerit at elit sed mollis. Curabitur eget ipsum ultricies, feugiat eros eu, mattis ex. Donec nec mi eros. Sed ut odio orci. Nam justo orci, vulputate at vestibulum et, pulvinar nec mi. Nunc vulputate turpis justo, et condimentum nulla pellentesque vitae. Fusce nulla risus, fringilla ut sagittis eu, malesuada auctor sem. Vestibulum leo nisi, feugiat eu mi at, interdum euismod nisi. Donec felis nulla, tempor ac auctor vel, ultricies vel nulla. Etiam tincidunt fringilla nunc. Praesent id pharetra enim. Nunc laoreet dapibus bibendum. Maecenas sit amet luctus mi. Sed nulla eros, suscipit vitae pretium nec, sollicitudin et mi.",

    new: true,
    userLike: false,
    likes: 90,
  },
  {
    id: "4ebf72c3-20b0-4fc3-9db3-947943158618",
    image: "/images/imagesTestProducts/imgTest9.webp",
    name: "Bar Stool",
    category: ["furniture", "chair"],
    price: 39.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed posuere augue. Morbi et dolor nunc. Nulla auctor nunc at mauris facilisis accumsan. Donec egestas lacinia ligula, placerat aliquet augue dapibus non. Vivamus convallis ex vitae lobortis fringilla. Fusce nec erat tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec cursus egestas volutpat. Nunc lorem ante, sollicitudin a dignissim eu, malesuada a dui. Donec hendrerit at elit sed mollis. Curabitur eget ipsum ultricies, feugiat eros eu, mattis ex. Donec nec mi eros. Sed ut odio orci. Nam justo orci, vulputate at vestibulum et, pulvinar nec mi. Nunc vulputate turpis justo, et condimentum nulla pellentesque vitae. Fusce nulla risus, fringilla ut sagittis eu, malesuada auctor sem. Vestibulum leo nisi, feugiat eu mi at, interdum euismod nisi. Donec felis nulla, tempor ac auctor vel, ultricies vel nulla. Etiam tincidunt fringilla nunc. Praesent id pharetra enim. Nunc laoreet dapibus bibendum. Maecenas sit amet luctus mi. Sed nulla eros, suscipit vitae pretium nec, sollicitudin et mi.",

    new: true,
    userLike: true,
    likes: 300,
  },
];

export default products;
