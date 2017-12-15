import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{
	visibleImages = [];
	getImages() {
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id: number) {
		return IMAGES.slice(0).find(image => image.id == id );
	}
}

const IMAGES = [
	{"id": 1, "category": "animals", "caption": "View from a boat", "url": "../assets/img/pexels-photo-148933 animals.jpeg"},
	{"id": 2, "category": "animals", "caption": "View from a boat", "url": "../assets/img/pexels-photo-209043 animals.jpeg"},
	{"id": 3, "category": "animals", "caption": "View from a boat", "url": "../assets/img/pexels-photo-308838 animals.jpeg"},
	{"id": 4, "category": "shoes", "caption": "View from a boat", "url": "../assets/img/pexels-photo-267299 random.jpeg"},
	{"id": 5, "category": "buildings", "caption": "View from a boat", "url": "../assets/img/pexels-photo-356000 random.jpeg"},
	{"id": 6, "category": "random", "caption": "View from a boat", "url": "../assets/img/pexels-photo-256146 random.jpeg"},
	{"id": 7, "category": "bridges", "caption": "View from a boat", "url": "../assets/img/pexels-photo-704615 bridges.jpeg"},
	{"id": 8, "category": "bridges", "caption": "View from a boat", "url": "../assets/img/pexels-photo-310112 bridges.jpeg"},
	{"id": 9, "category": "bridges", "caption": "View from a boat", "url": "../assets/img/pexels-photo-469103 bridges.jpeg"},
	{"id": 10, "category": "city", "caption": "View from a boat", "url": "../assets/img/pexels-photo-355033 city.jpeg"},
	{"id": 11, "category": "city", "caption": "View from a boat", "url": "../assets/img/pexels-photo-417120 city.jpeg"},
	{"id": 12, "category": "city", "caption": "View from a boat", "url": "../assets/img/pexels-photo-424176 city.jpeg"},
	{"id": 13, "category": "mountain", "caption": "View from a boat", "url": "../assets/img/pexels-photo-320346 mountain.jpeg"},
	{"id": 14, "category": "mountain", "caption": "View from a boat", "url": "../assets/img/pexels-photo-629159 mountain.jpeg"},
	{"id": 15, "category": "mountain", "caption": "View from a boat", "url": "../assets/img/pexels-photo-705075 mountain.jpeg"},
	{"id": 16, "category": "car", "caption": "View from a boat", "url": "../assets/img/pexels-photo-193991 car.jpeg"},
	{"id": 17, "category": "car", "caption": "View from a boat", "url": "../assets/img/pexels-photo-221292 car.jpeg"},
	{"id": 18, "category": "car", "caption": "View from a boat", "url": "../assets/img/pexels-photo-381292 car.jpeg"},
	{"id": 19, "category": "flower", "caption": "View from a boat", "url": "../assets/img/pexels-photo-158102 flower.jpeg"},
	{"id": 20, "category": "flower", "caption": "View from a boat", "url": "../assets/img/pexels-photo-415464 flower.jpeg"},
	{"id": 21, "category": "flower", "caption": "View from a boat", "url": "../assets/img/pexels-photo-701753 flower.jpeg"},
]