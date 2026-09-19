import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // 1. សម្រាប់ Nav / Header
      home: "Home",
      menu: "Menu",

      // 2. សម្រាប់ Home Page
      heroTitle: "Delicious in every bite, fresh every day",
      heroSubtitle: "Enjoy a variety of burgers and cold drinks with fast service",
      viewAllMenu: "View All Menu",
      orderBurger: "Order Burger",
      popularTitle: "Best Selling Menu",
      cheeseBurgerDesc: "Large beef patty with cheese slice and fresh vegetables",
      icedCoffeeDesc: "Rich coffee blended with fresh milk",
      frenchFriesDesc: "Crispy french fries lightly salted",
      viewMore: "View More",
      fastDelivery: "Fast Delivery",
      fastDeliveryDesc: "Hot & fresh to your hands within 30 minutes",
      freshIngredients: "Fresh Ingredients",
      freshIngredientsDesc: "High-quality selected ingredients",
      easyPayment: "Easy Payment",
      easyPaymentDesc: "Supports QR Code and Cash payment",

      // 3. សម្រាប់ Burger Page (បន្ថែមថ្មីនៅទីនេះ)
      allBurgerMenu: "All Burger Menu",
      orderNow: "Order Now",
      confirmOrder: "Confirm Order",
      addedSuccess: "Successfully added",
      burger1Name: "Big King Burger",
      burger1Desc: "Hot grilled beef patty with melted cheese and special sauce.",
      burger2Name: "Double Cheese Burger",
      burger2Desc: "Double cheese layers for extra deliciousness with fresh beef patties.",
      burger3Name: "Crispy Chicken Burger",
      burger3Desc: "Crispy fried chicken with mayonnaise sauce and fresh lettuce.",
      burger4Name: "BBQ Bacon Burger",
      burger4Desc: "Crispy bacon with rich and special BBQ sauce.",
      burger5Name: "Veggie Delight Burger",
      burger5Desc: "For vegetable lovers, fried with salad and special sauce.",
      burger6Name: "Chicken Jalapeno Burger",
      burger6Desc: "Fried chicken with Jalapeno peppers giving a spicy and delicious taste.",

      //4.For Drink page
      allDrinkMenu: "All Drink Menu",
      drink1Name: "Hot Latte",
      drink1Desc: "Delicious Hot Latte with fresh milk foam",
      drink2Name: "Iced Latte",
      drink2Desc: "Refreshing Iced Latte with fresh milk",
      drink3Name: "Iced Matcha Latte",
      drink3Desc: "Delicious Iced Matcha Latte with fresh milk",
      drink4Name: "Coca Cola",
      drink4Desc: "Refreshing cold Coca Cola",
      drink5Name: "Pepsi",
      drink5Desc: "Refreshing cold Pepsi",
      drink6Name: "Fanta",
      drink6Desc: "Refreshing cold Fanta",

      //5 For Footter Page
      footerAboutDesc: "Providing delicious burgers and beverages with high hygiene and fast service.",
      pagesTitle: "Pages",
      home: "Home",
      allMenu: "All Menu",
      burgerMenu: "Burger",
      drinkMenu: "Drink",
      contactUs: "Contact Us",
      phone: "Phone",
      location: "Location",
      phnomPenhCambodia: "Phnom Penh, Cambodia",
      followUs: "Follow Us",
      allRightsReserved: "All rights reserved.",

      //6 For Cart Page
      yourCartTitle: "Your Cart",
      emptyCart: "There are no items in your cart.",
      paymentSummary: "Payment Summary",
      totalPrice: "Total Price",
      selectPaymentMethod: "Select Payment Method",
      cashOnDelivery: "Cash on Delivery",
      proceedToCheckout: "Proceed to Checkout",
      scanToPay: "Scan to Pay",
      cashMessagePre: "Please prepare cash amount of",
      cashMessagePost: "when the delivery staff arrives.",
      done: "Done",
      selectItemFirstAlert: "Please select an item first!",
      paymentSuccessAlert: "Payment successful! Thank you for your order.",
      orderedItems: "Ordered Items",
      deliveryAddressTitle: "Delivery Information",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your name",
      phoneNumber: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      deliveryAddress: "Delivery Address",
      addressPlaceholder: "Street, House No, Sangkat, Khan...",
      noteOptional: "Note (Optional)",
      notePlaceholder: "e.g., Less spicy, call before delivery...",
      fillAddressAlert: "Please fill in all required delivery details!",
      deliverTo: "Deliver To",
    }
  },
  km: {
    translation: {
      // 1. សម្រាប់ Nav / Header
      home: "ទំព័រដើម",
      menu: "ម៉ឺនុយ",

      // 2. សម្រាប់ Home Page
      heroTitle: "ឆ្ងាញ់គ្រប់ម៉ាត់ ស្រស់ៗរាល់ថ្ងៃ",
      heroSubtitle: "រីករាយជាមួយប៊ឺហ្គឺ និងភេសជ្ជៈត្រជាក់ៗជាច្រើនជម្រើស ជាមួយសេវាកម្មរហ័សទាន់ចិត្ត",
      viewAllMenu: "មើល Menu ទាំងអស់",
      orderBurger: "កុម្ម៉ង់ Burger",
      popularTitle: "ម៉ឺនុយលក់ដាច់ប្រចាំហាង",
      cheeseBurgerDesc: "សាច់គោបន្ទះធំ ជាមួយឈីសបន្ទះ និងបន្លែស្រស់ៗ",
      icedCoffeeDesc: "កាហ្វេដិតឈ្ងុយ ជាមួយទឹកដោះគោស្រស់",
      frenchFriesDesc: "ដំឡូងបារាំងបំពងស្រួយ ស្រោចអំបិលស្ដើងៗ",
      viewMore: "មើលបន្ថែម",
      fastDelivery: "ដឹកជញ្ជូនរហ័ស",
      fastDeliveryDesc: "ក្តៅៗស្រស់ៗដល់ដៃអ្នកក្នុងពេល 30 នាទី",
      freshIngredients: "គ្រឿងផ្សំស្រស់ៗ",
      freshIngredientsDesc: "ជ្រើសរើសគ្រឿងផ្សំដែលមានគុណភាពខ្ពស់",
      easyPayment: "ទូទាត់ប្រាក់ងាយស្រួល",
      easyPaymentDesc: "គាំទ្រការទូទាត់តាម QR Code និងសាច់ប្រាក់",

      // 3. សម្រាប់ Burger Page (បន្ថែមថ្មីនៅទីនេះ)
      allBurgerMenu: "ម៉ឺនុយ Burger ទាំងអស់",
      orderNow: "កុម្ម៉ង់ឥឡូវនេះ",
      confirmOrder: "បញ្ជាក់ការកុម្ម៉ង់",
      addedSuccess: "បានបន្ថែមជោគជ័យ",
      burger1Name: "Big King Burger",
      burger1Desc: "សាច់គោបន្ទះធំអាំងក្តៅៗ ជាមួយឈីសរលាយ ស្រោចដោយទឹកជ្រលក់ពិសេស",
      burger2Name: "Double Cheese Burger",
      burger2Desc: "ឈីស ២ ជាន់បន្ថែមភាពឈ្ងុយឆ្ងាញ់ ជាមួយសាច់គោបន្ទះស្រស់ៗ",
      burger3Name: "Crispy Chicken Burger",
      burger3Desc: "សាច់មាន់បំពងស្រួយ ស្រោចទឹកជ្រលក់ម៉ាយ៉ូណែស និងសាឡាត់ស្រស់",
      burger4Name: "BBQ Bacon Burger",
      burger4Desc: "ប៊ីខនបំពងស្រួយ និងទឹកជ្រលក់ BBQ រសជាតិដិតឈ្ងុយពិសេស",
      burger5Name: "Veggie Delight Burger",
      burger5Desc: "សម្រាប់អ្នកចូលចិត្តបន្លែ បំពងជាមួយសាឡាត់ និងទឹកជ្រលក់ពិសេស។",
      burger6Name: "Chicken Jalapeno Burger",
      burger6Desc: "សាច់មាន់បំពងជាមួយម្ទេស Jalapeno ផ្តល់រសជាតិហឺតៗ និងឈ្ងុយឆ្ងាញ់",

      //4 For Drink Page
      allDrinkMenu: "ម៉ឺនុយ Drink ទាំងអស់",
      drink1Name: "Hot Latte",
      drink1Desc: "Hot Latte ឈ្ងុយឆ្ងាញ់ ជាមួយពពុះទឹកដោះគោស្រស់",
      drink2Name: "Iced Latte",
      drink2Desc: "Iced Latte ត្រជាក់រសជាតិឆ្ងាញ់ ជាមួយទឹកដោះគោស្រស់",
      drink3Name: "Ice Matcha Latte",
      drink3Desc: "Ice Matcha Latte ត្រជាក់ឈ្ងុយឆ្ងាញ់ ជាមួយទឹកដោះគោស្រស់",
      drink4Name: "Coca Cola",
      drink4Desc: "Coca Cola ត្រជាក់ឈ្ងុយឆ្ងាញ់",
      drink5Name: "Pepsi",
      drink5Desc: "Pepsi ត្រជាក់ឈ្ងុយឆ្ងាញ់",
      drink6Name: "Fanta",
      drink6Desc: "Fanta ត្រជាក់ឈ្ងុយឆ្ងាញ់",

      //5 For Footter Page
      footerAboutDesc: "ផ្តល់ជូននូវប៊ឺហ្គឺ និងភេសជ្ជៈដែលមានរសជាតិឆ្ងាញ់ ជាមួយអនាម័យខ្ពស់ និងសេវាកម្មរហ័សទាន់ចិត្ត",
      pagesTitle: "ទំព័រ",
      home: "ទំព័រដើម",
      allMenu: "ម៉ឺនុយទាំងអស់",
      burgerMenu: "Burger",
      drinkMenu: "Drink",
      contactUs: "ទំនាក់ទំនងយើងខ្ញុំ",
      phone: "ទូរស័ព្ទ",
      location: "ទីតាំង",
      phnomPenhCambodia: "ភ្នំពេញ, កម្ពុជា",
      followUs: "តាមដានពួកយើងតាម",
      allRightsReserved: "រក្សាសិទ្ធិគ្រប់យ៉ាង",

      //6 For Cart Page
      yourCartTitle: "ទំនិញរបស់អ្នក",
      emptyCart: "គ្មានទំនិញនៅក្នុងកន្ត្រកឡើយ",
      paymentSummary: "សរុបការទូទាត់",
      totalPrice: "តម្លៃសរុប",
      selectPaymentMethod: "ជ្រើសរើសវិធីទូទាត់ប្រាក់",
      cashOnDelivery: "បង់ប្រាក់ផ្ទាល់ (Cash on Delivery)",
      proceedToCheckout: "បន្តទៅការទូទាត់",
      scanToPay: "ស្កេនដើម្បីទូទាត់ប្រាក់",
      cashMessagePre: "សូមត្រៀមសាច់ប្រាក់ចំនួន",
      cashMessagePost: "ពេលបុគ្គលិកដឹកជញ្ជូនទៅដល់។",
      done: "រួចរាល់",
      selectItemFirstAlert: "សូមជ្រើសរើសទំនិញជាមុនសិន!",
      paymentSuccessAlert: "ការទូទាត់ជោគជ័យ! អរគុណសម្រាប់ការកុម្ម៉ង់",
      orderedItems: "ទំនិញដែលបានជ្រើសរើស",
      deliveryAddressTitle: "ព័ត៌មានដឹកជញ្ជូន",
      fullName: "ឈ្មោះពេញ",
      fullNamePlaceholder: "បញ្ចូលឈ្មោះរបស់អ្នក",
      phoneNumber: "លេខទូរស័ព្ទ",
      phonePlaceholder: "បញ្ចូលលេខទូរស័ព្ទ",
      deliveryAddress: "អាសយដ្ឋានដឹកជញ្ជូន",
      addressPlaceholder: "ផ្ទះលេខ, ផ្លូវ, សង្កាត់, ខណ្ឌ...",
      noteOptional: "ចំណាំបន្ថែម (ជម្រើស)",
      notePlaceholder: "ឧទាហរណ៍៖ កុំហឺរ, ខលប្រាប់មុនមកដល់...",
      fillAddressAlert: "សូមបំពេញព័ត៌មានអាសយដ្ឋានដឹកជញ្ជូនឱ្យបានគ្រប់គ្រាន់!",
      deliverTo: "ដឹកជញ្ជូនទៅកាន់"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;