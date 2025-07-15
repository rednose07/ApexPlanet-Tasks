  const products=[
    {id:1,name:" HP Wireless Mouse",price:499,img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ0RVgJq9cN34vPBa7JOEMbjC3jVzWCmrvq83wX_T0uMp_GJOgGp3Wu1WFRhSnAfziOVkz2aLsJH7pHWnQ69g2H3a99f8TM1Nc0GVYq9hzv"},

    {id:2,name:"Protonics Keyboard",price:999,img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBpiaLAUth4pTr9WM-BHFT1y7KwDIrC7muZGtC7OmVCrHMyvPTaNTa_VbXO2U1oPBSEY7LfhnuLfRbmCSq7A_OmPD4lJ7iN4O_Mpgvj6HnOUEaqz3xd5MHYA"},

    {id:3,name:"Laptop Bag",price:1299,img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRv2boiyKfQTXhuP6HSddF5TzM8HBoZAkACwAJb-9GpaOwVO4m5nvHG85WOLLpyEAQRZPgM0cx3rabGW9MwJzhppUzcaSrwf5DJ4SZmY-qIBM8KX7eZXYzNBw"},

    {id:4,name:"Boat Headphones",price:799,img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSH3kRfufYJ9s07_EOi_37KwktkK35Vyr_MKLbTP9lmXGdhQOOWjbKR5Mixe_hqZketCVj9EKLKViRGWF6d2x8CceieL63giZe5cWjX6AZH"},

    {id:5,name:"Samsung Smart Watch",price:1999,img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOFCXqswJ924uAvBHu39zsspO4eFvu8bU13xdNuPGHongosb9p40moW2D8BVQ-FrpmsFSl3g6IqNwGg9rx2pQOhV4pCxjNyZp_iO-VSwyujjI-yysTzjd3JMI"},

    {id:6,name:"USB Cable",price:199,img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQHObhpK4zmkIgSkgoriLE6YhbHczCWi9cRD5EZprb803yIFxxjS_HQbwQ7OBiIzt4E0mCXpcA29vNF7hPHEfmLUKg93DFVhMzVdF8doQ"},

    {id:7,name:"Xiaomi Power Bank",price:1499,img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4YhFnBsEHk3XSr4viAZkx2d5fdqtZp0H9_l-bVDtnjl9vav4G4F1LWxf-uTov2PcqcmBB8pxYlrVYZ7G8UGQAgvOllXwJc0snS1UURHo0"},

    {id:8,name:"JBL Speaker",price:999,img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnvn-F0UvWk0kJoMC6VDlRvjYuHzOCoh5vIYEMcuTg2Ppu7xo3EZ_BEOA5A4rVM8dh4fKBECH9Bnjfm5Q8HohcURwHgtsh2SOJgcaA8o4LUU4X7XDZfu5h"},

    {id:9,name:"Phone Stand",price:299,img:"https://m.media-amazon.com/images/I/71xBsn0mX5L.jpg"},

    {id:10,name:"LG MyView",price:5999,img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTxnvu0C6lCLP8YvWI4DKptVJ94_nvbdTiRlvYeq8TYgUKipmKlIZHz3P7iqiHINO-5EHpzD8neaAeeRCr5C-xUwl3iPzb5Sttvb0KlvkJj"},

    {id:11,name:"Printer",price:3999,img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRtchNaWp74hREUD3DrkZ4wRDtE1LIGGnQC6OMdQEBb66f0jokzZUWMMDDzywfZDXrb0g9s92ogbKJD4DeS8qQ9asZh2TKk9XqWgwSc5s_qE01kbO1Xajv3Tw"},

    {id:12,name:"Desk Lamp",price:499,img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmhrOoFck1lba6J6IFoHbcqpZRbOhCPmYeNprLFxnMTuyV9rhUyfmxr4pDxtcSGxxYJ66Nc3MeCO2AAs9Tkbss6QqHCxfWWNV_53HkZuQh"},

    {id:13,name:"Router",price:1299,img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSlPFLQ26UcU4X9r3ZXlhHL-fhOlHLcO7c4VaHYSHDKntJ70WayHP_F-2Gm1z1Veqm5zDfUxtLBpKMghTJA-Qp9JtTUzDJovMfKsFmC9inf"},

    {id:14,name:"SSD 1TB",price:5999,img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRkWxsmQqYXdKxfRr09swuVnK1HsEdaV0Ouv68YophLtt_93U_ualW4_DVEs7Eaz_U5sOWmiozpgcbntXFX10IdiGMvCsTVGeh-7p8GNUcgQ15Ds_HjOT5DY8o"},

    {id:15,name:"External HDD",price:4499,img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTAa5szYafkMBprCLCPc2QVQmGXPjMvY608XTV31NTWjdxPU78L7jnMKyA3x_vqBdmAcz5jMM4-SGwl9jcnqo6XNbirJLJPq-aSEO2Nre4"},

    {id:16,name:"Gaming Chair",price:8999,img:"https://m.media-amazon.com/images/I/71oCOhrfjHL.jpg"},

    {id:17,name:"Webcam",price:999,img:"https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg"},

    {id:18,name:"Microphone",price:1599,img:"https://m.media-amazon.com/images/I/611y6tVIwYL.jpg"},

    {id:19,name:"Laptop Cooling Pad",price:799,img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5HyegvJ_GVVl3zEJzi0CthOtTAsE8mTz9jfyd4TghTVNNIs-XspPIjeYhhGqbwKl-kxs75TOuyVz_T2ABEh7MG1RNdpiqlaqV76LRu-FBK7dSsBZGV40v"},

    {id:20,name:"HDMI Cable",price:399,img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnASnk9ufkhwOtPn9JBFy5lezSJ8J9N5-GmOTESomAcGK335NvyM60FDzavKwbqAyVqWH6hUmFNH13aS3KztNgr3vM1IjmtuWdh6yt_mxdkls6FThnGr67-g"},

    {id:21,name:"Stylus Pen",price:699,img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSsq7NVNEB-VsXL3rWtaftYamudsVVmM9IBPNtnT1QVyQSog11UFXAlvhZ2fI-0aALhsIJe3ubQmij2I_JwsL26V1C2fmvry6zTMsE1NMHf4e18EKMcCG3E"},

    {id:22,name:"Tablet Case",price:599,img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTXXEr5dizp27X5OdIWLpcRYtq7D0uCpbgPS4JMyEmGQCBAXs4EdFj9l3CgMMExD2rcqbHOrCBLRDdx3hRusaIx5z7RVQuATHVmfLQsJV0JXKbsdeiX42qk"},

    {id:23,name:"VR Headset",price:2999,img:"https://images.meesho.com/images/products/433539388/ac53h_512.webp"},

    {id:24,name:"Drone",price:12999,img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrEZ34YK2TGrNDxA5JSQ4sKFkrQ8Hc8kX1SQUrs59VZYIgZgehH5p3dVqg0n8dvxyYSerJTa6Rac2g93SJbItRrF4k_FVyjHyMN3zPqqMGzkr63Nx6UvLskA"},

    {id:25,name:"Camera Lens",price:4999,img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQomSRl-l0t4tu-1HrUgDF4KUHonGt8HDYWvCxbbckWsUPKLbPnfvR6Cxho6RtJqTANMTmbOxTlFxHmggFOedEz3FtkBQgM5Ao_APIEjkv5aGvzDhE72qpicQ"},

    {id:26,name:"Tripod",price:899,img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5WNTAuNrwm14hLJvDzJcwjZnbdtfuKOv1RYwawrzbWkI29aP1RFda89_Rt8fStClta8b5XBvP1rGq1Wt632zA3cyUEP6zt1P4j9dVrjFIpTEk8x1PxHwJFw"},

    {id:27,name:"Flash Drive",price:299,img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRiOuKc4EsxygZwAiY7vGc0qynWfreYvnyw8YDzs8f_ChEmZ6BiMYku4ZJjRJxEGFjYLRgBSDp2Pl-Royd8C9Rh1A6Ws6rn8e32JjCKCaWFBr1nzWqkqw9qXA"},

    {id:28,name:"Graphic Tablet",price:3499,img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbp_Mk4wdJwSG9M9ja4AFE9L4obXLjH5hvkvYmo_wwoSamNwxq8CJz8Hzi_zaLwL6wtmPLoW2BAFGvtlGGIlWl8WKpYFzPgTmoW30gcedw-mTaunWd43b25C0"},

    {id:29,name:"Projector",price:9999,img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTHD0vJTvgVIaCjZiKQH7oiemzb_4mWekNXCE8dZNy998tZH73EpVyQwWdzJ1vT8e40FrGR7J_yMUIYAEo99FB03LGxyVJiJisuo6hqqZvHu2LWNiLGALTyEw"},

    {id:30,name:"Airpods",price:10999,img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjmwg02yrqfEy-icHPdjTHVWeWyfzAr5TULaOJa39mC33eBMYebyafYykWsrnhPxftcf0UeG6D22S8l98UllCMoNXH9hMb083voBpyh6Q"}
  ];
  let cart=[]; let orders=[]; let signedInUser=null;
  const productList=document.getElementById('product-list');
  function renderProducts(list){productList.innerHTML='';list.forEach(p=>{const div=document.createElement('div');div.className='product';div.innerHTML=`<img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3><p>₹${p.price}</p><button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>`;productList.appendChild(div);});}
  renderProducts(products);
  function addToCart(id){const item=products.find(p=>p.id===id);cart.push(item);updateCart();showResponse(`${item.name} added to cart!`);}
  function updateCart(){const cartItemsElem=document.getElementById('cart-items');cartItemsElem.innerHTML='';let total=0;cart.forEach((item,i)=>{total+=item.price;const li=document.createElement('li');li.innerHTML=`${item.name} - ₹${item.price} <button onclick="removeItem(${i})">X</button>`;cartItemsElem.appendChild(li);});document.getElementById('cart-count').textContent=cart.length;document.getElementById('cart-total').textContent=total;}
  function removeItem(i){const removed=cart.splice(i,1)[0];updateCart();showResponse(`${removed.name} removed.`);}
  function showResponse(msg){const responseMessage=document.getElementById('response-message');responseMessage.textContent=msg;responseMessage.style.display='block';setTimeout(()=>{responseMessage.style.display='none';},2000);}
  document.getElementById('cart-link').onclick=()=>{document.getElementById('cart-panel').classList.toggle('active');document.getElementById('orders-panel').classList.remove('active');};
  document.getElementById('orders-link').onclick=()=>{document.getElementById('orders-panel').classList.toggle('active');document.getElementById('cart-panel').classList.remove('active');renderOrders();};
  document.addEventListener('click',e=>{if(!document.getElementById('cart-panel').contains(e.target)&&!e.target.closest('#cart-link'))document.getElementById('cart-panel').classList.remove('active');if(!document.getElementById('orders-panel').contains(e.target)&&!e.target.closest('#orders-link'))document.getElementById('orders-panel').classList.remove('active');});
  function checkout(){if(cart.length===0){showResponse('Cart is empty');return;}orders.push([...cart]);cart=[];updateCart();showResponse('Order placed!');document.getElementById('cart-panel').classList.remove('active');}
  function renderOrders(){const orderItemsElem=document.getElementById('order-items');orderItemsElem.innerHTML='';if(orders.length===0){orderItemsElem.innerHTML='<li>No orders yet.</li>';return;}orders.forEach((order,i)=>{const li=document.createElement('li');li.textContent=`Order #${i+1}: ${order.length} items`;orderItemsElem.appendChild(li);});}
  function searchProducts(){const q=document.getElementById('searchInput').value.toLowerCase();const f=products.filter(p=>p.name.toLowerCase().includes(q));renderProducts(f);showResponse(f.length?`${f.length} products found`:'No products');}
  document.getElementById('signin-link').onclick=()=>{document.getElementById('signin-modal').style.display='flex';};
  function closeSignin(){document.getElementById('signin-modal').style.display='none';}
  function signIn(){const u=document.getElementById('username').value.trim();const p=document.getElementById('password').value.trim();if(u&&p){signedInUser=u;document.getElementById('signin-modal').style.display='none';document.getElementById('signin-link').style.display='none';document.getElementById('user-display').textContent=`Hello, ${u}`;document.getElementById('user-display').style.display='inline';showResponse(`Signed in as ${u}`);}else{showResponse('Enter username & password');}}