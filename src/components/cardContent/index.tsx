import { IconShoppingCart } from '@tabler/icons-react';

import "./cardContent.scss";
import formatNumber from '../../lib/utils';
import { Product } from '../../types/product';

interface CardContentProps {
  data: Product;
  className?: string;
  addToCart: (product: Product) => void;
}

const CardContent = (props: CardContentProps) => {
  const { data, addToCart } = props;

  return (
    <div className="card-content" >
      <div className="card-content-title">
        <div className="card-content-title-name">
          <p className="category">{data?.category ?? ''}</p>
          <p className="name">{data?.name ?? ''}</p>
          <p className="price">IDR {formatNumber(data?.price ?? 0)}</p>
        </div>
        <div className="card-content-title-icon">
          <IconShoppingCart size={20} color="#F58220" stroke="1" onClick={() => addToCart(data)} />
        </div>
      </div>
      <div className="card-content-image">
        <img src={data?.image ?? ''} alt="product" />
      </div>
      <div className="title-vendor">
        <p className="title-vendor-1">Vendor Name</p>
        <p className="title-vendor-2">{data?.vendor ?? ''}</p>
      </div>
      <div></div>
    </div>
  )
};

export default CardContent;