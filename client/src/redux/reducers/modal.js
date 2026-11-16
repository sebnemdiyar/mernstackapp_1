import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: false,
    updateId: null,
  },
  reducers: {
    // Sadece modalı açıp kapatmak ve updateId'yi sıfırlamak için (Yeni Post Paylaş için)
    modalFunc: (state) => {
      state.modal = !state.modal;
      state.updateId = null; // Her normal açılışta ID kesinlikle sıfırlanır!
    },
    // Sadece güncelleme butonuna basıldığında id atamak ve modalı açmak için
    updateModalFunc: (state, action) => {
      state.modal = !state.modal;
      state.updateId = action.payload; // Gelen ID atanır
    },
  },
});

export const { modalFunc, updateModalFunc } = modalSlice.actions;
export default modalSlice.reducer;
