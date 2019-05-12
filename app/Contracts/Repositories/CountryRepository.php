<?php
/**
 * This file is part of the Volta Project.
 *
 * Copyright (c) 2018 - 2019. AzuyaLabs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Sacha Telgenhof <me@sachatelgenhof.com>
 */

namespace App\Contracts\Repositories;

/**
 * CountryRepository interface
 *
 * @package App\Contracts\Repositories
 */
interface CountryRepository
{
    /**
     * Get all of the countries in the world.
     *
     * @return array
     */
    public function all(): array;
}
