import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




function CategoryNav() {
	
	const options = [
	    'Adeniran Ogunsanya College of Education',
		' Adeyemi College of Education, Ondo',
		' College of Education, Afaha-Nsit',
		' College of Education, Ekiadolor',
		' College of Education, Ikere Ekiti',
		' College of Education, Oro, Kwara State',
		' College of Education, Azare',
		' College of Education, Warri',
		' College of Education, Agbor',
		' College of Education, Akwanga',
		' College of Education, Gindiri',
		' College of Education, Katsina-Ala',
		' FCT College of Education, Zuba',
		' Federal College of Education, Zaira',
		' Federal College of Education, Okene',
		' Federal College of Education, Akoka',
		' Federal College of Education, Omoku',
		' Federal College of Education (Special), Oyo',
		' Federal College of Education, Zaria',
		' Federal College of Education (Technical) Gombe',
		' Federal College of Education, Obudu',
		' Federal College of Education, pankshin',
		' Federal College of Education, (Technical) Bich',
		' Federal College of Education (Technical) Gusau',
		' Federal College of Education, Yola',
		' Kano State College of Education, Kano',
		' Kwara State College of Education',
		' National Teachers Institute, kaduna',
		' Nwafor Orizu College of Education',
		' Osun State College of Education, Ilesa',
		' Osun State College of Education, Ila-Orangun',
		' Oyo State College Of Education, Oyo',
		' Rivers State College of Education',
	];

	const ITEM_HEIGHT = 58;


	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
	setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
	setAnchorEl(null);
	};
	return (
		<Fragment>
			<div className='container mt-3'>
				<div className="nav-scroller py-1 mb-2">
					<nav className="nav d-flex justify-content-between">
					
						<div>
						  <Link
							className="p-2 text-muted"
							aria-label="more"
							aria-controls="long-menu"
							aria-haspopup="true"
							onClick={handleClick}
						  >Federal Universites >
							
						  </Link>
						  <Menu
							id="long-menu"
							anchorEl={anchorEl}
							keepMounted
							open={open}
							onClose={handleClose}
							PaperProps={{
							  style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: '40ch',
							  },
							}}
						  >
							{options.map((option) => (
							  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
								{option}
							  </MenuItem>
							))}
						  </Menu>
						</div>
						
						<div>
						  <Link
							className="p-2 text-muted"
							aria-label="more"
							aria-controls="long-menu"
							aria-haspopup="true"
							onClick={handleClick}
						  >State Universites >
							
						  </Link>
						  <Menu
							id="long-menu"
							anchorEl={anchorEl}
							keepMounted
							open={open}
							onClose={handleClose}
							PaperProps={{
							  style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: '40ch',
							  },
							}}
						  >
							{options.map((option) => (
							  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
								{option}
							  </MenuItem>
							))}
						  </Menu>
						</div>
						
						<div>
						  <Link
							className="p-2 text-muted"
							aria-label="more"
							aria-controls="long-menu"
							aria-haspopup="true"
							onClick={handleClick}
						  >Private Universites >
							
						  </Link>
						  <Menu
							id="long-menu"
							anchorEl={anchorEl}
							keepMounted
							open={open}
							onClose={handleClose}
							PaperProps={{
							  style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: '40ch',
							  },
							}}
						  >
							{options.map((option) => (
							  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
								{option}
							  </MenuItem>
							))}
						  </Menu>
						</div>
						
						<div>
						  <Link
							className="p-2 text-muted"
							aria-label="more"
							aria-controls="long-menu"
							aria-haspopup="true"
							onClick={handleClick}
						  >Polythecnics >
							
						  </Link>
						  <Menu
							id="long-menu"
							anchorEl={anchorEl}
							keepMounted
							open={open}
							onClose={handleClose}
							PaperProps={{
							  style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: '40ch',
							  },
							}}
						  >
							{options.map((option) => (
							  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
								{option}
							  </MenuItem>
							))}
						  </Menu>
						</div>
						
						<div>
						  <Link
							className="p-2 text-muted"
							aria-label="more"
							aria-controls="long-menu"
							aria-haspopup="true"
							onClick={handleClick}
						  >College Of Education >
							
						  </Link>
						  <Menu
							id="long-menu"
							anchorEl={anchorEl}
							keepMounted
							open={open}
							onClose={handleClose}
							PaperProps={{
							  style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: '40ch',
							  },
							}}
						  >
							{options.map((option) => (
							  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
								{option}
							  </MenuItem>
							))}
						  </Menu>
						</div>
					</nav>
				</div>
			</div>
		</Fragment>
	);
}
export default CategoryNav;



