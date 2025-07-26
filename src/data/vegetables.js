import tomatoesImage from '@/assets/tomatoes.jpg';
import bellPeppersImage from '@/assets/bell-peppers.jpg';
import carrotsImage from '@/assets/carrots.jpg';
import spinachImage from '@/assets/spinach.jpg';
import onionsImage from '@/assets/onions.jpg';
import broccoliImage from '@/assets/broccoli.jpg';

export const vegetables = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    price: 40,
    image: tomatoesImage,
    unit: 'per kg',
    description: 'Fresh organic tomatoes, perfect for cooking'
  },
  {
    id: '2',
    name: 'Bell Peppers',
    price: 60,
    image: bellPeppersImage,
    unit: 'per kg',
    description: 'Crisp green bell peppers, rich in vitamins'
  },
  {
    id: '3',
    name: 'Carrots',
    price: 35,
    image: carrotsImage,
    unit: 'per kg',
    description: 'Sweet orange carrots, freshly harvested'
  },
  {
    id: '4',
    name: 'Spinach',
    price: 25,
    image: spinachImage,
    unit: 'per bunch',
    description: 'Fresh leafy spinach, packed with nutrients'
  },
  {
    id: '5',
    name: 'Red Onions',
    price: 30,
    image: onionsImage,
    unit: 'per kg',
    description: 'Fresh red onions, perfect for all dishes'
  },
  {
    id: '6',
    name: 'Broccoli',
    price: 80,
    image: broccoliImage,
    unit: 'per piece',
    description: 'Fresh broccoli head, rich in vitamins and minerals'
  }
];
