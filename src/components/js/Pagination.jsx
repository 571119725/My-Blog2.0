import React, {useEffect, useState} from 'react';
import cx from 'classnames';
import '../css/Pagination.css';
const Pagination = ({allPage, currentPage, handleSearch, loading}) => {
  const MORETXT = '...';
  const MAX_PAGE = 7; // 最多展示的分页器个数，建议为奇数，保证分页器的对称
  const MINMORE = 2; // 第一个...的位置
  const MAXMORE = 6; // 最后一个...的位置
  const INTERTALS = 6;
  const [nums, setNums] = useState([]); // 显示的页码数组
  const [current, setCurrent] = useState(currentPage);

  useEffect(() => {
    changePage(allPage, currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPage, currentPage]);

  const changePage = (total, cur) => {
    const numsRes = drawPage(total, cur);
    setCurrent(cur);
    setNums(numsRes);
    handleSearch(cur);
  };

  /**
   * 改变分页器中的内容
   * @param {number} total
   * @param {number} cur
   */
  const drawPage = (total, cur) => {
    const temp = MAX_PAGE - 2; // 可显示页码数 =  页码个数 - 首页 - 尾页

    let pagesNum = []; // 显示页码数组
    if (total <= MAX_PAGE) { // 如果当前总页数 <= MAX_PAGE，则直接将当前总页数转成数组
      pagesNum = [...Array(total).keys()].map(item => item + 1);
      return pagesNum;
    }

    // 如果当前总页数 > MAX_PAGE，则需要分为三种情况
    // 1. 当前页码离首页稍近的时候，尾部显示省略号
    if (cur <= Math.ceil(temp / 2)) {
      pagesNum = [...Array(temp).keys()].map(item => item + 1); // 除省略号和尾页之外的数字
      pagesNum = [...pagesNum, MORETXT, total];
      return pagesNum;
    }

    // 2.当前页码离尾页稍近的时候，头部显示省略号
    if (cur >= total - Math.floor(temp / 2)) {
      pagesNum = [...Array(temp).keys()].map(item => total - item); // 除省略号和首页之外的数字
      pagesNum = [1, MORETXT, ...pagesNum.reverse()]; // 上一步拿到的pagesNum是倒序的，所以需要反转一下
      return pagesNum;
    }

    // 3. 以上情况都不成立，则显示两个省略号
    pagesNum = around(total, cur);
    return pagesNum;
  };

  /**
   * 处理两边都有省略号的情况
   * @param {array} total
   * @param {number} curPage
   */
  const around = (total, curPage) => {
    const side = (MAX_PAGE - 5) / 2; // 5 = 首 + 省略号 + curPage + 省略号 + 尾
    const leftArr = [...Array(curPage).keys()].reverse().slice(0, side); // curPage左边的数组
    const rightArr = [...Array(total).keys()].slice(curPage + 1, curPage + side + 1); // curPage右边的数组
    const pagesNum = [1, MORETXT, ...leftArr, curPage, ...rightArr, MORETXT, allPage];
    return pagesNum;
  };

  const handleClick = (item, index) => {
    if (loading) {
      return;
    }
    /**
     * 如果是...，则分两种情况
     * 1. 向前更多时，将num设置成当前中间数字向前两个
     * 2. 向前更多时，将num设置成当前中间数字向后两个
     * 需要注意，不要超过边界值
     */
    const isMoreTxt = item === MORETXT;
    let num = isMoreTxt ? 0 : parseInt(item, 10);
    if (isMoreTxt) {
      if (index + 1 === MINMORE) { // 是否是第一个...
        num = current - INTERTALS < 1 ? 1 : current - INTERTALS;
      }
      if (index + 1 === MAXMORE) { // 是否是第二个...
        num = current + INTERTALS > allPage ? allPage : current + INTERTALS;
      }
    }
    changePage(allPage, num);
  };

  return (
    <ul className="pagination">
      {
        nums.map((item, index) => {
          const isMore = item === MORETXT;
          const isChoosed = item === Number(current);
          return <li key={index}
            className={cx('page-change', {'choosed': isChoosed, 'page-more': isMore})}
            onClick={() => handleClick(item, index)}>
            {item}
          </li>;
        })
      }
    </ul>
  );
};
export default Pagination;