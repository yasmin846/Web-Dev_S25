import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 16 Pro Max 256gb',
      description: 'Latest Apple smartphone with A17 chip.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      rating: 4.8,
      price: '656 760 ₸',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium']
    },
    {
      id: 2,
      name: 'Samsung Galaxy S25 Ultra 256gb',
      description: 'Newest Samsung flagship with AI camera.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-medium',
      rating: 4.7,
      price: '592 665 ₸',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/pd8/pc8/20118459.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd1/pcb/20118465.png?format=gallery-medium']
    },
    {
      id: 3,
      name: 'iPhone 13 128Gb',
      description: 'The Apple iPhone 13 has received a 6.1-inch Super Retina XDR display, which features incredibly high pixel density — photos, videos, and text look strikingly clear. ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
      rating: 4.5,
      price: '276 243 ₸',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-medium']
    },
    {
      id: 4,
      name: 'Xiaomi Redmi 13C',
      description: 'The Xiaomi Redmi 13C is an affordable smartphone with a sleek design, a large display, and a long-lasting battery. ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      rating: 4.4,
      price: '45 022 ₸',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium']
    },
    {
      id: 5,
      name: 'Samsung Galaxy A35 128gb',
      description: 'The new Samsung Galaxy A35 is a mid–range smartphone. The mid-budget Galaxy A series is constantly being updated and improved, offering users improved features and a pleasant price, and the A35 has become a worthy continuation of the line.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5e/85429009285150.png?format=gallery-medium',
      rating: 4.8,
      price: '129 426 ₸',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/haf/85429009481758.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he5/h1d/85429009350686.png?format=gallery-medium']
    },
    {
      id: 6,
      name: 'OPPO A78 256gb',
      description: 'The smartphone has an AMOLED screen with FHD+ resolution, which displays detailed images with natural color reproduction. Intelligent adaptive backlight allows you to comfortably watch video content and multimedia materials without straining your vision under different conditions.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=gallery-medium',
      rating: 4.5,
      price: '69 614 ₸',
      link: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/p5f/p46/19319588.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p0a/p46/19319585.png?format=gallery-medium']
    },
    {
      id: 7,
      name: 'Samsung Galaxy A55 128gb',
      description: 'Samsung has unveiled a new mid-budget A–series smartphone, the Galaxy A55, and today it is the top model of the line, which has received significant improvements in both performance and software, including a powerful processor with graphics from AMD. ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/hec/85429003943966.png?format=gallery-medium',
      rating: 4.8,
      price: '163 994 ₸',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-sirenevyi-117420288/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h8a/h82/85429037367326.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h78/h67/85429004075038.png?format=gallery-medium']
    },
    {
      id: 8,
      name: 'Apple iPhone 16 256Gb',
      description: 'New design, bright colors, powerful processor and fresh iOS 18 with artificial intelligence. ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/hf4/87295473254430.png?format=gallery-medium',
      rating: 5,
      price: '477 562 ₸',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-256gb-belyi-123730579/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/hb1/h7c/87295473319966.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h96/h33/87295473287198.png?format=gallery-medium']
    },
    {
      id: 9,
      name: 'Xiaomi Redmi Note 12 Pro 256gb',
      description: 'The Xiaomi Red Note 12 Pro smartphone is equipped with a 6.67-inch display, which is made using AMOLED technology. It helps to cover a wide range of shades and natural color reproduction. The 120 Hz refresh rate eliminates input delays while playing dynamic games and watching movies.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hcb/79755720294430.jpg?format=gallery-medium',
      rating: 4.3,
      price: '99 672 ₸',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-chernyi-109734243/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h84/hca/79755723046942.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h09/h46/79755721474078.jpg?format=gallery-medium']
    },
    {
      id: 10,
      name: 'Realme Note 50 128gb',
      description: 'The 6.7" Real me Note 50 smartphone is made in a blue case with IP54 protection. It supports the installation of 2 SIM cards, is equipped with 4G and GPS modules. Therefore, the device works smoothly in a wireless network, and quickly reconnects with interruptions.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/hcf/84991826722846.png?format=gallery-medium',
      rating: 4.2,
      price: '46 978 ₸',
      link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAiArKW-BhAzEiwAZhWsIG9t-IAeRu0zSd9TDzmY4ruYoKLNTe9Gzjxap21gDv514zI1IcMqUhoCpeEQAvD_BwE',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/hc5/he4/84991594627102.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h27/hfa/84991594659870.jpg?format=gallery-medium']
    }
  ];

  shareOnWhatsApp(product: Product) {
    const url = `https://api.whatsapp.com/send?text=Check out this product: ${product.name} - ${product.link}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${product.link}&text=Check out this product: ${product.name}`;
    window.open(url, '_blank');
  }
}
