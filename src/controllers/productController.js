let products = [];
let nextId = 1;

// 전체 조회
export const getAllProducts = (req, res) => {
  res.status(200).json({ data: products });
};

// 단일 조회
export const getProductById = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json({ data: product });
};

// 생성
export const createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'name과 price는 필수입니다' });
  }
  const newProduct = { id: nextId++, name, price };
  products.push(newProduct);
  res.status(201).json({ data: newProduct });
};

// 전체 교체 (PUT)
export const replaceProduct = (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'name과 price는 필수입니다' });
  }
  products[index] = { id, name, price };
  res.json({ data: products[index] });
};

// 일부 수정 (PATCH)
export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  const { name, price } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  res.json({ data: product });
};

// 삭제
export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  products = products.filter(p => p.id !== id);
  res.status(204).send();
};