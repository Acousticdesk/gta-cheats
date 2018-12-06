const findSearchQueryMatch = searchQuery => ({ combination, description }) => {
  const finder = new RegExp(searchQuery, 'i')

  return finder.test(combination) || finder.test(description)
}

export default (searchQuery, cheats) => {
  const cheatsClone = {...cheats}

  Object.keys(cheatsClone).forEach(category => {
    cheatsClone[category] = cheatsClone[category].filter(findSearchQueryMatch(searchQuery))
  })

  return cheatsClone
}
