#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import Distributions: quantile, NegativeBinomial
import JSON

"""
	gen( k, r, p, name )

Generate fixture data and write to file.

# Arguments

* `k`: input value
* `r`: number of failures until experiment is stopped
* `p`: success probability
* `name::AbstractString`: output filename

# Examples

``` julia
julia> k = rand( 1000 );
julia> r = round.( rand( 1000 ) .* 20 );
julia> p = rand( 1000 );
julia> gen( k, r, p, "data.json" );
```
"""
function gen( k, r, p, name )
	z = Array{Float64}( undef, length(k) );
	for i in eachindex(k)
		z[ i ] = quantile( NegativeBinomial( r[i], p[i] ), k[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("k", k),
		("r", r),
		("p", p),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Random (small r, small p):
k = rand( 1000 );
r = round.( ( rand( 1000 ) .* 20 ) .+ 0.5 );
p = rand( 1000 ) .* 0.2;
gen( k, r, p, "small_small.json" );

# Random (small r, high p):
k = rand( 1000 );
r = round.( ( rand( 1000 ) .* 20 ) .+ 0.5 );
p = ( rand( 1000 ) .* 0.25 ) .+ 0.75;
gen( k, r, p, "small_high.json" );

# Random (high r, high p):
k = rand( 1000 );
r = round.( ( rand( 1000 ) .* 100 ) .+ 0.5 );
p = ( rand( 1000 ) .* 0.25 ) .+ 0.75;
gen( k, r, p, "high_high.json" );

# Random (high r, small p):
k = rand( 1000 );
r = round.( ( rand( 1000 ) .* 100 ) .+ 0.5 );
p = rand( 1000 ) .* 0.2;
gen( k, r, p, "high_small.json" );