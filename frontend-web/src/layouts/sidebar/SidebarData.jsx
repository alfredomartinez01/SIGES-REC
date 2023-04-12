import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/siges-rec',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Materiales',
    path: '/siges-rec',
    icon: <RiIcons.RiPencilRulerLine />
  },
  {
    title: 'Prestamos y Devoluciones',
    path: '/siges-rec',
    icon: <BsIcons.BsQrCodeScan />
  },
  {
    title: 'Asociados',
    path: '/siges-rec',
    icon: <MdIcons.MdSupervisedUserCircle />
  },
  {
    title: 'Administradores',
    path: '/siges-rec',
    icon: <RiIcons.RiUserStarFill />
  },
  {
    title: 'Configuración organización',
    path: '/siges-rec',
    icon: <RiIcons.RiSettings3Fill />
  },
  {
    down: true,
    title: 'Manual de usuario',
    path: '/siges-rec',
    icon: <MdIcons.MdMenuBook />
  },
  {
    down: true,
    title: 'Salir',
    path: '/siges-rec',
    icon: <FiIcons.FiLogOut />
  }
];