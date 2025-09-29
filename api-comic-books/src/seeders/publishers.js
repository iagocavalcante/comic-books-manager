'use strict'

const mongoose = require('mongoose')
require('dotenv').config()
const Publisher = require('../models/publisher')

const publishers = [
  { name: 'Marvel Comics', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg' },
  { name: 'DC Comics', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/DC_Comics_logo.png' },
  { name: 'Image Comics', logo: 'https://imagecomics.com/assets/logo.png' },
  { name: 'Dark Horse Comics', logo: 'https://www.darkhorse.com/Assets/Images/dhc-logo.png' },
  { name: 'IDW Publishing', logo: 'https://www.idwpublishing.com/wp-content/themes/idw/images/logo.png' },
  { name: 'Panini Comics', logo: 'https://www.paninicomics.com.br/web/guest/home' },
  { name: 'Vertigo', logo: '' },
  { name: 'Dynamite Entertainment', logo: '' },
  { name: 'Boom! Studios', logo: 'https://www.boom-studios.com/images/boom-logo.svg' },
  { name: 'Valiant Comics', logo: '' },
  { name: 'Archie Comics', logo: 'https://www.archiecomics.com/images/archie-logo.png' },
  { name: 'Oni Press', logo: '' },
  { name: 'Top Cow Productions', logo: '' },
  { name: 'Zenescope Entertainment', logo: '' },
  { name: 'Avatar Press', logo: '' }
]

async function seed() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_HOST || 'mongodb://localhost:27017/comic-books')

    console.log('Connected to MongoDB')

    // Clear existing publishers
    await Publisher.deleteMany({})
    console.log('Cleared existing publishers')

    // Insert new publishers
    const result = await Publisher.insertMany(publishers)
    console.log(`Inserted ${result.length} publishers`)

    publishers.forEach(pub => {
      console.log(`- ${pub.name}`)
    })

    process.exit(0)
  } catch (error) {
    console.error('Error seeding publishers:', error)
    process.exit(1)
  }
}

seed()