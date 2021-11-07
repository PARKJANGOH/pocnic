import SearchBar from "../../components/searchbar"
import SearchList from "../../components/searchlist"

export default function SearchView() {
    return <div style={{ padding: "30px" }}>
        <div style={{ padding: "16px" }}><SearchBar /></div>
        <SearchList />
    </div>
}