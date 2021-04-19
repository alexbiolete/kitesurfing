import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Guest from './Templates/Guest'
import Auth from './Templates/Auth'

function App() {
  const [users, setUsers] = useState([])
  const [spots, setSpots] = useState([])
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }

    getUsers()
  }, [])

  useEffect(() => {
    const getSpots = async () => {
      const spotsFromServer = await fetchSpots()
      setSpots(spotsFromServer)
    }

    getSpots()
  }, [])

  const fetchSessionToken = async () => {
    const sessionToken = null
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sessionToken)
    })
    const data = await response.json()

    console.log(data)
    return data
  }

  const fetchUsers = async () => {
    const response = await fetch (`https://5ddbb358041ac10014de140b.mockapi.io/user`)
    const data = await response.json()

    console.log(data)
    return data
  }

  const fetchUser = async (id) => {
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/user/${id}`)
    const data = await response.json()

    console.log(data)
    return data
  }

  const createUser = async (user) => {
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()

    setUsers([...users, data])
  }

  const updateUser = async (id) => {
    const userToUpdate = await fetchUser(id)
    const userUpdated = { ...userToUpdate,
      email: userToUpdate.email,
      password: userToUpdate.password
    }
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userUpdated)
    })

    const data = await response.json()

    setUsers(
      users.map((user) =>
        user.id === id ? { ...user,
          email: data.email,
          password: data.password
        } : user
      )
    )
  }

  const deleteUser = async (id) => {
    await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/user/${id}`, {
      method: 'DELETE'
    })

    setUsers(users.filter((user) => user.id !== id))
  }

  const fetchSpots = async () => {
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/spot`)
    const data = await response.json()

    console.log(data)
    return data
  }

  const fetchSpot = async (id) => {
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/spot/${id}`)
    const data = await response.json()

    console.log(data)
    return data
  }

  const createSpot = async (spot) => {
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/spot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(spot)
    })
    const data = await response.json()

    setSpots([...spots, data])
  }

  const updateSpot = async (id) => {
    const spotToUpdate = await fetchUser(id)
    const spotUpdated = { ...spotToUpdate,
      name: spotToUpdate.name,
      country: spotToUpdate.country,
      lat: spotToUpdate.lat,
      long: spotToUpdate.long,
      probability: spotToUpdate.probability,
      month: spotToUpdate.month
    }
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/spot/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(spotUpdated)
    })

    const data = await response.json()

    setSpots(
      spots.map((spot) =>
      spot.id === id ? { ...spot,
          name: data.name,
          country: data.country,
          lat: data.lat,
          long: data.long,
          probability: data.probability,
          month: data.month
        } : spot
      )
    )
  }

  const deleteSpot = async (id) => {
    await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/spot/${id}`, {
      method: 'DELETE'
    })

    setSpots(spots.filter((spot) => spot.id !== id))
  }

  const fetchFavourites = async () => {
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/favourites`)
    const data = await response.json()

    console.log(data)
    return data
  }

  const fetchFavourite = async (id) => {
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/favourites/${id}`)
    const data = await response.json()

    console.log(data)
    return data
  }

  const createFavourite = async (spot) => {
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/favourites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(spot)
    })
    const data = await response.json()

    setFavourites([...favourites, data])
  }

  const updateFavourite = async (id) => {
    const favouriteToUpdate = await fetchUser(id)
    const favouriteUpdated = { ...favouriteToUpdate,
      spot: favouriteToUpdate.spot
    }
    const response = await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/favourites/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favouriteUpdated)
    })

    const data = await response.json()

    setFavourites(
      favourites.map((favourite) =>
      favourite.id === id ? { ...favourite,
          spot: data.spot
        } : favourite
      )
    )
  }

  const deleteFavourite = async (id) => {
    await fetch(`https://5ddbb358041ac10014de140b.mockapi.io/favourites/${id}`, {
      method: 'DELETE'
    })

    setFavourites(favourites.filter((favourite) => favourite.id !== id))
  }

  return (
    <Router>
      <div className="antialiased">
        <Route path='/' exact component={Guest} />
        <Route path='/dashboard'>
          <Auth spots={spots} favourites={favourites} />
        </Route>
      </div>
    </Router>
  )
}

export default App
