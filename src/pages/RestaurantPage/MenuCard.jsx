import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { categoryIngredients } from '../../utils/categoryIngredients';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/Cart/Action';


export const MenuCard = ({ item }) => {

    const [selectorIngredients, setSelectorIngredients] = useState([])
    const [isOrderCart, setIsOrderCart] = useState([])
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const handleCheckBoxChange = (itemName) => {
        if (selectorIngredients.includes(itemName)) {
            setSelectorIngredients(selectorIngredients.filter(ingredient => ingredient !== itemName))
        } else {
            setSelectorIngredients([...selectorIngredients, itemName])
        }
    }

    const handleAddItemToCart = () => {
        const reqData = {
            token: localStorage.getItem('jwt'),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectorIngredients,
            }
        }

        dispatch(addItemToCart(reqData))

    }


    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img
                            className='w-[7rem] h-[7rem] object-cover'
                            src={item.images[0]} alt="" />

                        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                            <p className='font-semibold text-xl'>{item.name}</p>
                            <p>{item.price}.000 Vnd</p>
                            <p className='text-gray-400' >{item.description}</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>

                        {Object.keys(categoryIngredients(item.ingredients)).map((category, index) => (
                            <div key={index}>
                                <p>{category}</p>
                                <FormGroup>
                                    {categoryIngredients(item.ingredients)[category].map((ingrendient, index) => (
                                        <FormControlLabel
                                            key={index}
                                            control={<Checkbox onChange={() => handleCheckBoxChange(ingrendient.name)} />}
                                            label={ingrendient.name}
                                        />
                                    ))}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className='pt-5'>
                        <Button onClick={handleAddItemToCart} variant='contained'
                            disabled={cart.cartItems.some(cartItem => cartItem.food.name === item.name)}
                        // type='submit'
                        >{true ? 'Thêm vào giỏ hàng' : 'Hết hàng'}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}
