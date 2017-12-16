import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{
	visibleImages = [];
	getImages() {
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id: number) {
		return IMAGES.slice(0).find(image => image.id === id );
	}
}

// mimics db results
const IMAGES = [
	{"id": 1, "category": "animals", "caption": "Monkey Face!", "url": "../assets/img/pexels-photo-148933 animals.jpeg"},
	{"id": 2, "category": "animals", "caption": "I have a nut..", "url": "../assets/img/pexels-photo-209043 animals.jpeg"},
	{"id": 3, "category": "animals", "caption": "Siblings", "url": "../assets/img/pexels-photo-308838 animals.jpeg"},
	{"id": 4, "category": "shoes", "caption": "Boat Shoe", "url": "../assets/img/pexels-photo-267299 random.jpeg"},
	{"id": 5, "category": "boat", "caption": "Lil Boat", "url": "../assets/img/pexels-photo-356000 random.jpeg"},
	{"id": 6, "category": "buildings", "caption": "Mega Structure", "url": "../assets/img/pexels-photo-256146 random.jpeg"},
	{"id": 7, "category": "bridges", "caption": "Suspension Bridge View", "url": "../assets/img/pexels-photo-704615 bridges.jpeg"},
	{"id": 8, "category": "bridges", "caption": "Light me up!", "url": "../assets/img/pexels-photo-310112 bridges.jpeg"},
	{"id": 9, "category": "bridges", "caption": "Bend it", "url": "../assets/img/pexels-photo-469103 bridges.jpeg"},
	{"id": 10, "category": "city", "caption": "Water City", "url": "../assets/img/pexels-photo-355033 city.jpeg"},
	{"id": 11, "category": "city", "caption": "Reflections", "url": "../assets/img/pexels-photo-417120 city.jpeg"},
	{"id": 12, "category": "city", "caption": "Concrete Jungle", "url": "../assets/img/pexels-photo-424176 city.jpeg"},
	{"id": 13, "category": "mountain", "caption": "Fog", "url": "../assets/img/pexels-photo-320346 mountain.jpeg"},
	{"id": 14, "category": "mountain", "caption": "Eerie", "url": "../assets/img/pexels-photo-629159 mountain.jpeg"},
	{"id": 15, "category": "mountain", "caption": "Under my Feet", "url": "../assets/img/pexels-photo-705075 mountain.jpeg"},
	{"id": 16, "category": "car", "caption": "Classy", "url": "../assets/img/pexels-photo-193991 car.jpeg"},
	{"id": 17, "category": "car", "caption": "Vintage", "url": "../assets/img/pexels-photo-221292 car.jpeg"},
	{"id": 18, "category": "car", "caption": "Muscle", "url": "../assets/img/pexels-photo-381292 car.jpeg"},
	{"id": 19, "category": "flower", "caption": "Buy me a garden!", "url": "../assets/img/pexels-photo-158102 flower.jpeg"},
	{"id": 20, "category": "flower", "caption": "LoVe", "url": "../assets/img/pexels-photo-415464 flower.jpeg"},
	{"id": 21, "category": "flower", "caption": "Pot Luck!", "url": "../assets/img/pexels-photo-701753 flower.jpeg"},
]