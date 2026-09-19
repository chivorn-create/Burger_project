import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function CartPage({ cart, setCart }) {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState('khqr'); // khqr ឬ cash
  const [isPaid, setIsPaid] = useState(false);

  // ១. បន្ថែម State សម្រាប់រក្សាទុកព័ត៌មានអាសយដ្ឋានដឹកជញ្ជូន
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    phone: '',
    address: '',
    note: ''
  });

  // គណនាតម្លៃសរុប
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id, change) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleCheckout = () => {
    if (cart.length === 0) return alert(t('selectItemFirstAlert'));
    
    // ពិនិត្យមើលថា User បានបំពេញព័ត៌មានចាំបាច់ហើយឬនៅ
    if (!deliveryInfo.fullName || !deliveryInfo.phone || !deliveryInfo.address) {
      return alert(t('fillAddressAlert'));
    }

    setIsPaid(true);
  };

  return (
    <div className="font-khmer max-w-5xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">🛒 {t('yourCartTitle')}</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">{t('emptyCart')}</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ផ្នែកទី ១៖ បញ្ជីទំនិញ និង ទម្រង់បំពេញអាសយដ្ឋាន */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* បញ្ជីទំនិញ */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">{t('orderedItems')}</h2>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                    <div>
                      <h3 className="font-bold text-slate-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* ២. ផ្នែកបំពេញអាសយដ្ឋានដឹកជញ្ជូន (Delivery Address Form) */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
              <h2 className="text-xl font-bold text-slate-800">{t('deliveryAddressTitle')}</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('fullName')} *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={deliveryInfo.fullName}
                    onChange={handleInputChange}
                    placeholder={t('fullNamePlaceholder')}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('phoneNumber')} *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={deliveryInfo.phone}
                    onChange={handleInputChange}
                    placeholder={t('phonePlaceholder')}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('deliveryAddress')} *</label>
                <textarea
                  name="address"
                  rows="2"
                  value={deliveryInfo.address}
                  onChange={handleInputChange}
                  placeholder={t('addressPlaceholder')}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('noteOptional')}</label>
                <input
                  type="text"
                  name="note"
                  value={deliveryInfo.note}
                  onChange={handleInputChange}
                  placeholder={t('notePlaceholder')}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

          </div>

          {/* ផ្នែកទី ២៖ ការទូទាត់ប្រាក់ (Payment Section) */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 h-fit space-y-4">
            <h2 className="text-xl font-bold text-slate-800">{t('paymentSummary')}</h2>
            
            <div className="flex justify-between text-lg font-bold border-b pb-4">
              <span>{t('totalPrice')}:</span>
              <span className="text-red-500">${totalPrice.toFixed(2)}</span>
            </div>

            {/* ជ្រើសរើសវិធីសាស្ត្រទូទាត់ */}
            <div>
              <p className="text-sm font-semibold mb-2">{t('selectPaymentMethod')}:</p>
              <div className="space-y-2">
                <label className="flex items-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="khqr" 
                    checked={paymentMethod === 'khqr'} 
                    onChange={() => setPaymentMethod('khqr')} 
                  />
                  <span>KHQR (ABA / Bakong)</span>
                </label>
                <label className="flex items-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cash" 
                    checked={paymentMethod === 'cash'} 
                    onChange={() => setPaymentMethod('cash')} 
                  />
                  <span>💵 {t('cashOnDelivery')}</span>
                </label>
              </div>
            </div>

            {/* ប៊ូតុងទូទាត់ */}
            <button 
              onClick={handleCheckout}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition"
            >
              {t('proceedToCheckout')}
            </button>
          </div>

        </div>
      )}

      {/* Pop-up បង្ហាញ QR Code ពេលជ្រើសរើស KHQR */}
      {isPaid && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-3xl max-w-sm w-full text-center space-y-4">
            <h3 className="text-xl font-bold">{t('scanToPay')}</h3>
            {paymentMethod === 'khqr' ? (
              <div className="bg-red-50 p-4 rounded-2xl border border-red-200">
                <p className="text-xs text-red-600 font-bold mb-2">KHQR Payment</p>
                <div className="w-48 h-48 bg-gray-200 mx-auto flex items-center justify-center rounded-lg text-4xl overflow-hidden">
                    <img className="w-full h-full object-cover" src="/src/assets/qr.jpg" alt="KHQR Code" />
                </div>
                <p className="text-lg font-bold text-red-600 mt-2">${totalPrice.toFixed(2)}</p>
              </div>
            ) : (
              <p className="text-gray-600">
                {t('cashMessagePre')} <strong>${totalPrice.toFixed(2)}</strong> {t('cashMessagePost')}
              </p>
            )}

            {/* បង្ហាញព័ត៌មានទីតាំងសង្ខេបក្នុង Pop-up */}
            <div className="text-left text-xs bg-gray-50 p-3 rounded-xl space-y-1 text-gray-600">
              <p><strong>{t('deliverTo')}:</strong> {deliveryInfo.fullName} ({deliveryInfo.phone})</p>
              <p><strong>{t('location')}:</strong> {deliveryInfo.address}</p>
            </div>

            <button 
              onClick={() => {
                setIsPaid(false);
                setCart([]); // លុបទិន្នន័យក្នុង Cart បន្ទាប់ពីទូទាត់រួច
                setDeliveryInfo({ fullName: '', phone: '', address: '', note: '' }); // Reset Form
                alert(t('paymentSuccessAlert'));
              }}
              className="w-full py-2 bg-slate-900 text-white font-bold rounded-xl"
            >
              {t('done')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;