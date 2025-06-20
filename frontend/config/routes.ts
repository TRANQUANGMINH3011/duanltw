﻿export default [
	{
		path: '/user',
		layout: false,
		routes: [
			{
				path: '/user/login',
				layout: false,
				name: 'login',
				component: './user/Login',
			},
			{
				path: '/user',
				redirect: '/user/login',
			},
		],
	},

	///////////////////////////////////
	// DEFAULT MENU
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: './TrangChu',
		icon: 'HomeOutlined',
	},
	{
		path: '/gioi-thieu',
		name: 'About',
		component: './TienIch/GioiThieu',
		hideInMenu: true,
	},
	{
		path: '/random-user',
		name: 'RandomUser',
		component: './RandomUser',
		icon: 'ArrowsAltOutlined',
	},

	// DANH MUC HE THONG
	// {
	// 	name: 'DanhMuc',
	// 	path: '/danh-muc',
	// 	icon: 'copy',
	// 	routes: [
	// 		{
	// 			name: 'ChucVu',
	// 			path: 'chuc-vu',
	// 			component: './DanhMuc/ChucVu',
	// 		},
	// 	],
	// },

	{
		path: '/notification',
		routes: [
			{
				path: './subscribe',
				exact: true,
				component: './ThongBao/Subscribe',
			},
			{
				path: './check',
				exact: true,
				component: './ThongBao/Check',
			},
			{
				path: './',
				exact: true,
				component: './ThongBao/NotifOneSignal',
			},
		],
		layout: false,
		hideInMenu: true,
	},
	{
  path: '/admin',
  name: 'Quản lý cho mượn',
  icon: 'crown',
  access: 'canAdmin', // Chỉ tàik khoản có quyền admin mới thấy menu này
  routes: [
    {
      path: '/admin/dashboard',
      name: 'Thống kê',
      icon: 'areaChart',
      component: './Admin/Dashboard',
    },
    {
      path: '/admin/equipments',
      name: 'Quản lý thiết bị',
      icon: 'database',
      component: './Admin/Equipments',
    },
    {
      path: '/admin/requests',
      name: 'Yêu cầu mượn',
      icon: 'solution',
      component: './Admin/Requests',
    },
     {
      path: '/admin/borrows',
      name: 'Ghi nhận mượn-trả',
      icon: 'sync',
      component: './Admin/Borrows',
    },
  ],
},
	{
		path: '/',
	},
	{
		path: '/403',
		component: './exception/403/403Page',
		layout: false,
	},
	{
		path: '/hold-on',
		component: './exception/DangCapNhat',
		layout: false,
	},
	{
		component: './exception/404',
	},
];
