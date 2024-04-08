import React from 'react';

type TGoodsProps = {
  goods: string[];
}

const Goods = React.memo(({ goods }: TGoodsProps): JSX.Element => {
  const goodsList = goods.map((item) => <li className="offer__inside-item" key={item}>{item}</li>);
  return (
    <ul className="offer__inside-list">
      {goodsList}
    </ul>
  );
});
Goods.displayName = 'Goods';

export default Goods;
