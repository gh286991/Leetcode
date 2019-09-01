# 矩陣中不同方向取最大值累加方法--Js

最近在刷LeetCode，好像偶爾都會遇到需樣這種操作的解題方法，像是：

[Projection Area of 3D Shapes](https://leetcode.com/problems/projection-area-of-3d-shapes)

[Max Increase to Keep City Skyline](https://leetcode.com/problems/max-increase-to-keep-city-skyline)        

這兩題都會需要這種操作。

大致的問題如下：

有個陣列 `[[1,2,3],[4,5,6],[7,8,9]]`如果要取每一行或每一列最大值的累加的話，可以用**reduce**中的累加功能達成這個效果：

![martix maxV acc](https://i.imgur.com/y7oyUhM.jpg)



## Reduce有兩種

reduce有兩種，雖然最後累加出來的值都是一樣的，但其過程有滿大的不同。一種是累加的概念，會有現在的值多少還有目前累加到多少的值，另外一種就是遞迴的概念。

**累加：**

```js
const sum = input.reduce( (accumulator, currentValue)=> {
    return accumulator + currentValue;
  }, 0);

```

**遞迴：**

```js
const reduce = input.reduce((a,b)=>{
    return a+b
})
```



![Reduce](https://i.imgur.com/EXH4dXD.jpg)

## 行的最大值

取每一行的最大值出來累加，其實就相當於取每個array取最大值再相加。

```js
const horizontalMax =(data)=>{
  const outPut = data.reduce((acc,curr) => {
    const max =  Math.max(...curr) 
    return acc + max
  },0)
  return outPut
}
```

由於Math.max()不能直接對陣列作用，所以需要用 ES6的展開式(...)來讓陣列也可以使用求最大值

## 列的最大值

取每一行的最大值出來累加，其實就相當於取每個array取最大值再相加。

```js
const verticalMax =(data)=>{
  const outPut = data[0].reduce((acc,curr,index) => {
    const vertical =  data.map(value =>{
      return value[index]
    })
    const max =  Math.max(...vertical) 
    return acc + max
  },0)
  return outPut
}
```

諸如此類的，這樣這個方法也能用來求最小值或是平均之類的一些判斷運算之類的。