const getProducts = (req, res) => {
  const { category, page = 1 } = req.query;
  res.json({ message: '상품 목록', category: category || '전체', page: Number(page) });
};

const createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'name과 price는 필수입니다' });
  }
  res.status(201).json({ message: '상품 생성 완료', product: { name, price } });
};

export { getProducts, createProduct };