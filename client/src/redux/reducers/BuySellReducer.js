import {
  GET_ALL_BUY_SELL_ITEMS,
  NEW_REQUEST,
  GET_SINGLE_BUY_SELL_ITEM,
  ADD_NEW_BUY_SELL_ITEM,
  GET_MY_OWN_BUY_SELL_ITEMS,
  EDIT_BUY_SELL_ITEM,RESET_STATUS,
  DELETE_BUY_SELL_ITEM
} from "../constants/AllConstants";

const initialState = {
  itemList: [],
  singleProduct: {},
  firstImage: "",
  isLoading: false,
  editBuySellResponse:'',
  ownBuySellItems:[],
  deleteBuySellItemResponse:""
};

const BuySellReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BUY_SELL_ITEMS:
      return {
        ...state,
        isLoading: false,
        itemList: action.payload.products,
      };
    case NEW_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_SINGLE_BUY_SELL_ITEM:
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload.Product,
        firstImage: action.payload.Product.files
          ? action.payload.Product.files[0].uri
          : "",
      };
    case ADD_NEW_BUY_SELL_ITEM:
      return state;

      case GET_MY_OWN_BUY_SELL_ITEMS:
        return {
          ...state,
          ownBuySellItems: action.payload.Products,
          isLoading: false,
        };

        case EDIT_BUY_SELL_ITEM:
      return{
      ...state,
      editBuySellResponse:action.payload.status
      } 
      case DELETE_BUY_SELL_ITEM:
        return{
            ...state,
            deleteBuySellItemResponse:action.payload
            

        };

      case RESET_STATUS:{
        return{
          ...state,
          editBuySellResponse:''
        }
      }
    default:
      return state;
  }
};

export default BuySellReducer;
