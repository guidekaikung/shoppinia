import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {
                    id: 1,
                    name: 'Asus ROG Phone 6D',
                    price: 700,
                    image: 'https://s.isanook.com/hi/0/ud/313/1565537/rog_6d_th.jpg'
                },
                {
                    id: 2,
                    name: 'Black Shark 5 Pro',
                    price: 400,
                    image: 'https://www.gizchina.com/wp-content/uploads/images/2022/03/black-shark-5.png'
                },
                {
                    id: 3,
                    name: 'Asus ROG Phone 5',
                    price: 1200,
                    image: 'https://speedcom.co.th/uploads/cache/img_1280x1280/uploads/images/product_1694489911712.png'
                },
                {
                    id: 4,
                    name: 'Sony Xperia 1 IV',
                    price: 900,
                    image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/00_03_Large_static_M?$largeImageMobile$&fmt.png'
                },
                {
                    id: 5,
                    name: 'iPhone 15 Pro Max',
                    price: 520,
                    image: 'https://www.ais.th/content/dam/ais/consumer/store/devices/apple/iphone/iphone-15-series/iphone-15-pro-max/iphone-15-pro-max-natural-titanium.png'
                },
                {
                    id: 6,
                    name: 'Samsung Galaxy S23 Ultra',
                    price: 400,
                    image: 'https://images.samsung.com/is/image/samsung/p6pim/th/2302/gallery/th-galaxy-s23-s918-sm-s918bzkbthl-534857666?$650_519.PNG'
                },
                {
                    id: 7,
                    name: 'ROG Phone 7 Ultimate',
                    price: 1399,
                    image: 'https://dlcdnwebimgs.asus.com/files/media/C4512AF4-88A1-4B0E-91F7-BE550046216F/v1/features/images/large/1x/animation/kv/phone_right.png'
                },
                {
                    id: 8,
                    name: 'OnePlus 11',
                    price: 650,
                    image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/black-img.png'
                },
                {
                    id: 9,
                    name: 'Poco F4 GT',
                    price: 100,
                    image: 'https://www.checkraka.com/uploaded/img/content/131554/Redmi%20K50%20GE.png'
                },
                {
                    id: 10,
                    name: 'Nubia RedMagic 8 Pro',
                    price: 350,
                    image: 'https://www.gizmochina.com/wp-content/uploads/2022/12/Red-Magic-7-Pro-1024x683.png'
                }
            
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
              });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been saved',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your item has been removed',
              showConfirmButton: false,
              timer: 1500
            });
        }
        
    },
})