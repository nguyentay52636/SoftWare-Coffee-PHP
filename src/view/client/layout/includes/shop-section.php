<section class="shop-section">
    <div class="container">
        <div class="section-header">
            <h2>OUR SHOP</h2>
            <p>Explore our finest selection of coffee beans and brewing accessories.</p>
        </div>
        <div class="product-grid">
            <?php
            // Dữ liệu sản phẩm với ảnh thực tế từ trang web
            $products = [
                [
                    'name' => 'Espresso Blend',
                    'price' => 15.00,
                    'image' => 'https://barista.qodeinteractive.com/wp-content/uploads/2017/02/shop-1.jpg'
                ],
                [
                    'name' => 'French Roast',
                    'price' => 18.00,
                    'image' => 'https://barista.qodeinteractive.com/wp-content/uploads/2017/02/shop-2.jpg'
                ],
                [
                    'name' => 'Colombian Beans',
                    'price' => 20.00,
                    'image' => 'https://barista.qodeinteractive.com/wp-content/uploads/2017/02/shop-3.jpg'
                ]
            ];

            // Lặp qua danh sách sản phẩm để hiển thị
            foreach ($products as $product) {
                echo '
                <div class="product-item">
                    <div class="product-image">
                        <img src="' . $product['image'] . '" alt="' . $product['name'] . '">
                    </div>
                    <div class="product-info">
                        <h3>' . $product['name'] . '</h3>
                        <p class="price">$' . number_format($product['price'], 2) . '</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>';
            }
            ?>
        </div>
        <!-- Pagination -->
        <div class="pagination">
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
        </div>
    </div>
</section>