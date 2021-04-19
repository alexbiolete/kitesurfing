import { useState, useEffect, useMemo } from 'react'
import { Route, Switch } from 'react-router-dom'
import { dbApiUrl } from './App/config'
import { months } from './Resources/listMonths'
import Guest from './Templates/Guest'
import Auth from './Templates/Auth'
import Login from './Views/Guest/Login'
import Register from './Views/Guest/Register'
import Dashboard from './Views/Auth/Dashboard'

function App() {
  const [session, setSession] = useState('')
  const [authenticatedUserName, setAuthenticatedUserName] = useState('')
  const [users, setUsers] = useState([])
  const [spots, setSpots] = useState([])
  const [unfilteredSpots, setUnfilteredSpots] = useState([])
  const [favourites, setFavourites] = useState([])
  const [filterCountry, setFilterCountry] = useState('')
  const [filterProbability, setFilterProbability] = useState('')
  const [filterSearch, setFilterSearch] = useState('')

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }

    getUsers()
  }, [])

  useEffect(() => {
    const getFavourites = async () => {
      const favouritesFromServer = await fetchFavourites()
      setFavourites(favouritesFromServer)
    }

    getFavourites()
  }, [])

  useEffect(() => {
    const getSpots = async () => {
      const spotsFromServer = await fetchSpots()

      // Assign a 'favourite' field (bool) for each Spot element
      // and set it to true if the id corresponds to any
      // spot value from each Favourite element.
      spotsFromServer.forEach((spot) => {
        spot.favourite = favourites.some((favourite) => {
          return spot.id === favourite.spot.toString()
        })
      })

      setSpots(spotsFromServer)
      // Set a back-up array to restore the main one after
      // removing filters.
      setUnfilteredSpots(spotsFromServer)
    }

    getSpots()
  }, [favourites])

  // Sorting logic for table elements
  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config)

    const sortedItems = useMemo(() => {
      var sortableItems = [...items]
      if (sortConfig !== null) {
        // Sorting logic for integer values
        if (sortConfig.key === 'lat' || sortConfig.key === 'long' || sortConfig.key === 'probability') {
          sortableItems.sort((a, b) => {
            if (sortConfig.direction === 'ascending') {
              return a[sortConfig.key] - b[sortConfig.key]
            }
            if (sortConfig.direction === 'descending') {
              return b[sortConfig.key] - a[sortConfig.key]
            }
            return 0
          })
        // Sorting logic for months (there is an array with
        // all months in order, and sorting is done based
        // on their indices)
        } else if (sortConfig.key === 'month') {
          sortableItems.sort((a, b) => {
            if (sortConfig.direction === 'ascending') {
              return months.indexOf(a.month)
              - months.indexOf(b.month)
            }
            if (sortConfig.direction === 'descending') {
              return months.indexOf(b.month)
              - months.indexOf(a.month)
            }
            return 0
          })
        // Sorting logic based on strings (non-case sensitive)
        } else {
          sortableItems.sort((a, b) => {
            if (a[sortConfig.key].toLowerCase() < b[sortConfig.key].toLowerCase()) {
              return sortConfig.direction === 'ascending' ? -1 : 1
            }
            if (a[sortConfig.key].toLowerCase() > b[sortConfig.key].toLowerCase()) {
              return sortConfig.direction === 'ascending' ? 1 : -1
            }
            return 0
          })
        }

      }
      return sortableItems
    }, [items, sortConfig])

    const requestSort = (key, direction) => {
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === direction
      ) {
        setSortConfig(null)
      } else {
        setSortConfig({ key, direction })
      }
    }

    return { items: sortedItems, requestSort, sortConfig }
  }

  const fetchSession = async (user) => {
    const response = await fetch(`${dbApiUrl}/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()

    console.log(response)
    console.log(data.userId.toString())
    return data.userId.toString()
  }

  const fetchUsers = async () => {
    const response = await fetch (`${dbApiUrl}/user`)
    const data = await response.json()

    console.log(response)
    console.log(data)
    return data
  }

  const createUser = async (user) => {
    const response = await fetch(`${dbApiUrl}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()

    // Set user data locally to simulate a user session
    // after registration.
    localStorage.setItem('userId', fetchSession(user).userId)
    localStorage.setItem('userName', user.name)
    setAuthenticatedUserName(user.name)

    console.log(response)
    console.log(data)
    setUsers([...users, data])
  }

  const readUser = async (id) => {
    const response = await fetch(`${dbApiUrl}/user/${id}`)
    const data = await response.json()

    console.log(response)
    console.log(data)
    return data
  }

  const updateUser = async (id) => {
    const userToUpdate = await readUser(id)
    const userUpdated = { ...userToUpdate,
      email: userToUpdate.email,
      password: userToUpdate.password
    }
    const response = await fetch(`${dbApiUrl}/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userUpdated)
    })

    const data = await response.json()

    console.log(response)
    console.log(data)
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
    const response = await fetch(`${dbApiUrl}/user/${id}`, {
      method: 'DELETE'
    })

    console.log(response)
    setUsers(users.filter((user) => user.id !== id))
  }

  const fetchFavourites = async () => {
    const response = await fetch(`${dbApiUrl}/favourites`)
    const data = await response.json()

    console.log(response)
    console.log(data)
    return data
  }

  const createFavourite = async (id) => {
    const response = await fetch(`${dbApiUrl}/favourites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        spot: parseInt(id)
      })
    })

    const data = await response.json()

    // After sending the Favourite object to the API, set
    // related Spot's favourite field to true.
    spots.forEach((spot) => {
      if (spot.id === data.spot) {
        spot.favourite = true
      }
    })

    console.log(response)
    console.log(data)
    setFavourites([...favourites, data])
  }

  const readFavourite = async (id) => {
    const response = await fetch(`${dbApiUrl}/favourites/${id}`)
    const data = await response.json()

    console.log(response)
    console.log(data)
    return data
  }

  const updateFavourite = async (id) => {
    const favouriteToUpdate = await readFavourite(id)
    const favouriteUpdated = { ...favouriteToUpdate,
      spot: favouriteToUpdate.spot
    }
    const response = await fetch(`${dbApiUrl}/favourites/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favouriteUpdated)
    })

    const data = await response.json()

    console.log(response)
    console.log(data)
    setFavourites(
      favourites.map((favourite) =>
        favourite.id === id ? { ...favourite,
          spot: data.spot
        } : favourite
      )
    )
  }

  const deleteFavourite = async (spot_id) => {
    var id = 0

    // Find Favourite element id based on Spot id.
    favourites.forEach((favourite) => {
      if (favourite.spot.toString() === spot_id) {
        id = favourite.id.toString()
      }
    })

    // After deleting the Favourite object from the API, set
    // related Spot's favourite field to false.
    spots.forEach((spot) => {
      if (spot.id === spot_id) {
        spot.favourite = false
      }
    })

    const response = await fetch(`${dbApiUrl}/favourites/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    console.log(response)
    setFavourites(favourites.filter((favourite) => favourite.id !== id))
  }

  const fetchSpots = async () => {
    const response = await fetch(`${dbApiUrl}/spot`)
    const data = await response.json()

    console.log(response)
    console.log(data)
    return data
  }

  const createSpot = async (spot) => {
    /*
     * Generate random values in fields that are not available
     * in the form from ModalAddItem component, since there is
     * no "location picker" implemented for the map or any
     * API for Wind Probability.
     */
    spot.lat = (Math.random() * 100).toFixed(4).toString()
    spot.long = (Math.random() * 100).toFixed(4).toString()
    spot.probability = (Math.floor(Math.random() * 100))
    spot.month = months[Math.floor(Math.random() * months.length)]

    const response = await fetch(`${dbApiUrl}/spot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(spot)
    })
    const data = await response.json()

    console.log(response)
    console.log(data)
    setSpots([...spots, data])
    // Also update the back-up array after creating a new
    // object.
    setUnfilteredSpots([...unfilteredSpots, data])
  }

  const readSpot = async (id) => {
    const response = await fetch(`${dbApiUrl}/spot/${id}`)
    const data = await response.json()

    console.log(response)
    console.log(data)
    return data
  }

  const updateSpot = async (id) => {
    const spotToUpdate = await readSpot(id)
    const spotUpdated = { ...spotToUpdate,
      name: spotToUpdate.name,
      country: spotToUpdate.country,
      lat: spotToUpdate.lat,
      long: spotToUpdate.long,
      probability: spotToUpdate.probability,
      month: spotToUpdate.month
    }
    const response = await fetch(`${dbApiUrl}/spot/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(spotUpdated)
    })

    const data = await response.json()

    console.log(response)
    console.log(data)
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
    const response = await fetch(`${dbApiUrl}/spot/${id}`, {
      method: 'DELETE'
    })

    console.log(response)
    setSpots(spots.filter((spot) => spot.id !== id))
  }

  return (
    <div className="antialiased">
      {/*
        * If the user name is not set in localStorage,
        * it can only access the Login and Register routes.
        *
        * The user name acts as a session token. If a Login
        * or a Registration succeeds and the value is set,
        * it will be redirected to the Dashboard.
        */}
      {!localStorage.getItem('userName') ? (
        <Switch>
          <Route path='/' exact>
            <Guest>
              <Login
                fetchSession={fetchSession}
                session={session}
                setSession={setSession}
                users={users}
                authenticatedUserName={authenticatedUserName}
                setAuthenticatedUserName={setAuthenticatedUserName}
              />
            </Guest>
          </Route>

          <Route path='/register' exact>
            <Guest>
              <Register
                users={users}
                onAdd={createUser}
              />
            </Guest>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path='/' exact>
            <Auth
              authenticatedUserName={localStorage.getItem('userName')}
              setAuthenticatedUserName={setAuthenticatedUserName}
              createSpot={createSpot}
            >
              <Dashboard
                spots={spots}
                setSpots={setSpots}
                unfilteredSpots={unfilteredSpots}
                createFavourite={createFavourite}
                deleteFavourite={deleteFavourite}
                filterCountry={filterCountry}
                setFilterCountry={setFilterCountry}
                filterProbability={filterProbability}
                setFilterProbability={setFilterProbability}
                filterSearch={filterSearch}
                setFilterSearch={setFilterSearch}
                useSortableData={useSortableData}
              />
            </Auth>
          </Route>
        </Switch>
      )}
    </div>
  )
}

export default App
