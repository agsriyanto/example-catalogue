import React, { useState } from "react";
import { Breadcrumb } from "antd";
import { IconSearch } from '@tabler/icons-react'

import './itPeriperal.scss';
import CardContent from '../../components/cardContent';
import Dropdown from "../../components/dropdown";
import products from "../../assets/data/products.json";

interface Product {
  id: number;
  name: string;
  vendor: string;
  price: number;
  date: string;
}

const ItPeriperal = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('Low Price');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const sortProducts = (products: Product[]) => {
    switch (sortOption) {
      case 'Low Price':
        return products.sort((a, b) => a.price - b.price);
      case 'High Price':
        return products.sort((a, b) => b.price - a.price);
      case 'Latest':
        return products.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'Oldest':
        return products.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      default:
        return products;
    }
  };

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.vendor.toLowerCase().includes(searchQuery.toLowerCase())
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
            <div className="category-item">All</div>
            <div className="category-item">Device</div>
            <div className="category-item">Smartphone</div>
            <div className="category-item">Sub Category</div>
            <div className="category-item">Sub Category</div>
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
          <CardContent key={i} data={product} className="card-content" />
        ))}
      </div>
    </div>
  );
};

export default ItPeriperal;