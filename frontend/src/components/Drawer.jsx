
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react'

export function MyDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0()

    const Menu = [
        { name: "Home", link: "/" },
        { name: "Menu", link: "/menu" },
        { name: "About", link: "/about" },
        { name: "Cart", link: "/cart" },
        { name: "Contact Us", link: "/contact" }
    ]

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    className="btn btn-outline text-custom-brown hover:bg-custom-brown"
                    onClick={() => setIsOpen(true)}><GiHamburgerMenu size={15} /></button>
            </div>
            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="Cafelin" />
                <Drawer.Items>
                    <div className="grid grid-cols-1  gap-2">
                        {Menu.map((menu, index) => (
                            <div key={index} className="text-lg font-bold text-center" onClick={handleClose}>
                                <Link to={menu.link}>{menu.name}</Link>
                            </div>
                        ))}
                        <div className="flex justify-center items-center">

                            {
                                isAuthenticated ?
                                    <button
                                        onClick={logout}
                                        className='btn btn-outline text-custom-brown hover:bg-custom-brown font-bold'>
                                        Logout
                                    </button>
                                    :
                                    <button
                                        onClick={loginWithRedirect}
                                        className='btn btn-outline text-custom-brown hover:bg-custom-brown font-bold'>Login / Sign Up</button>
                            }
                        </div>
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    );
}
