// Product images are referenced from /src/assets/
// Place product1.jpg (₹15 small packet) and product2.jpg (₹140 big box) in src/assets/

export const products = [
  {
    id: 1,
    name: 'Jay Baba Ji Agarbatti',
    nameHindi: 'जय बाबा जी अगरबत्ती',
    variant: 'Small Packet',
    price: 15,
    originalPrice: 20,
    image: '/product1.jpg',
    description: '12 Incense Sticks per Packet. Pure & Natural fragrance for daily पूजा.',
    features: ['Long Lasting Fragrance', 'Pure & Natural', 'Calming Atmosphere'],
    fragrances: ['Rose', 'Mogra', 'Sandal'],
    badge: 'Best Value',
    sticks: '12 Sticks',
  },
  {
    id: 2,
    name: 'Jay Baba Ji Agarbatti',
    nameHindi: 'जय बाबा जी अगरबत्ती',
    variant: 'Big Box',
    price: 140,
    originalPrice: 200,
    image: '/product2.jpg',
    description: '10 Packets in One Box. 120 incense sticks total. Best price guaranteed.',
    features: ['10 Packets Included', 'Wholesale Rate', 'All Fragrances'],
    fragrances: ['Rose', 'Mogra', 'Sandal'],
    badge: 'Best Deal',
    sticks: '120 Sticks (10 × 12)',
  },
];

export const fragrances = [
  {
    id: 1,
    name: 'Rose',
    nameHindi: 'गुलाब',
    emoji: '🌹',
    color: 'from-rose-400 to-pink-600',
    bgColor: 'bg-rose-50',
    description: 'Sweet floral fragrance of fresh roses for a divine atmosphere.',
  },
  {
    id: 2,
    name: 'Mogra',
    nameHindi: 'मोगरा',
    emoji: '🌸',
    color: 'from-white to-purple-200',
    bgColor: 'bg-purple-50',
    description: 'Pure jasmine fragrance that fills every corner with peace.',
  },
  {
    id: 3,
    name: 'Sandal',
    nameHindi: 'चंदन',
    emoji: '🪵',
    color: 'from-amber-200 to-amber-500',
    bgColor: 'bg-amber-50',
    description: 'Sacred sandalwood aroma for deep meditation and prayers.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sunita Devi',
    location: 'Patna, Bihar',
    rating: 5,
    review: 'बहुत अच्छी खुशबू है। हर रोज पूजा में उपयोग करती हूं। Jay Baba Ji Agarbatti सच में बहुत अच्छी है!',
    avatar: 'S',
    color: 'bg-red-500',
  },
  {
    id: 2,
    name: 'Ramesh Kumar',
    location: 'Muzaffarpur, Bihar',
    rating: 5,
    review: 'Price is very affordable. ₹15 mein itni achhi agarbatti milti hai, koi nahi deta. Quality ekdum badhiya hai.',
    avatar: 'R',
    color: 'bg-orange-500',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'Varanasi, UP',
    rating: 5,
    review: 'The box of ₹140 is very good value for money. 10 packets with all three fragrances — Rose, Mogra, Sandal — all excellent!',
    avatar: 'P',
    color: 'bg-yellow-600',
  },
  {
    id: 4,
    name: 'Anjali Singh',
    location: 'Delhi',
    rating: 5,
    review: 'Mogra ki khushbu bahut sundar hai. Puja ke baad ghar mein bahut acha mahaul banta hai. Zaroor try karein!',
    avatar: 'A',
    color: 'bg-pink-500',
  },
];

export const features = [
  {
    id: 1,
    icon: '🕯️',
    title: 'Long Lasting Fragrance',
    titleHindi: 'लंबे समय तक खुशबू',
    desc: 'Our agarbatti burns slowly, releasing fragrance for extended periods during your prayers.',
  },
  {
    id: 2,
    icon: '🌿',
    title: 'Quality Ingredients',
    titleHindi: 'गुणवत्ता सामग्री',
    desc: 'Made with 100% natural ingredients — no harmful chemicals, safe for family and home.',
  },
  {
    id: 3,
    icon: '🌸',
    title: 'Beautiful Aroma',
    titleHindi: 'सुंदर सुगंध',
    desc: 'Three distinct fragrances — Rose, Mogra and Sandal — each carefully crafted.',
  },
  {
    id: 4,
    icon: '🙏',
    title: 'Everyday पूजा उपयोग',
    titleHindi: 'रोज़ की पूजा',
    desc: 'Perfect for daily prayers, special occasions, meditation and spiritual practices.',
  },
];
