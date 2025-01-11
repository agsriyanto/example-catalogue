import React, { useState } from "react";
import { Breadcrumb } from "antd";
import { IconSearch } from '@tabler/icons-react'

import './itPeriperal.scss';
import CardContent from '../../components/cardContent';
import Dropdown from "../../components/dropdown";
import productsData from "../../assets/data/products.json";
import { Product } from '../../types/product'

const ItPeriperal = (props: any) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('Low Price');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const products: Product[] = productsData as Product[];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const sortProducts = (products: Product[]) => {
    switch (sortOption) {
      case 'Low Price':
        return products.sort((a, b) => a.price - b.price);
      case 'High Price':
        return products.sort((a, b) => b.price - a.price);
      case 'Latest':
        return products.sort(
          (a, b) =>
            new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
        );
      case 'Oldest':
        return products.sort(
          (a, b) =>
            new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime()
        );
      default:
        return products;
    }
  };

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.vendor.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter((product: Product) =>
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div className="itPeriperal">
      <Breadcrumb separator=">" items={[{ title: 'Home' }, { title: 'IT Periperal' }]} className="breadcrumb" />
      <div className="itPeriperal-title">
        <p className="itPeriperal-title-1">E-Catalogue</p>
        <p className="itPeriperal-title-2">IT - PERIPERAL</p>
      </div>
      <div className="itPeriperal-content">
        <p className="title-category">Sub Category :</p>
        <div className="itPeriperal-content-card">
          <div className="category">
            {['All', 'Device', 'Smartphone', 'Sub Category 1', 'Sub Category 2'].map((category) => (
              <div
                key={category}
                className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="sorting">
            <p>Sort by</p>
            <Dropdown sortOption={sortOption} setSortOption={setSortOption} />
          </div>
        </div>
        <div className="search-container">
          <IconSearch className="search-icon" size="22" />
          <input
            type="text"
            placeholder="Search item, vendor.."
            className="search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="container-card">
        {sortedProducts.map((product: Product, i: number) => (
          <CardContent {...props} key={i} data={product as Product} className="card-content" />
        ))}
      </div>
    </div>
  );
};

export default ItPeriperal;